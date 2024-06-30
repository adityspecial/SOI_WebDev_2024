const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo');
const User = require('./models/Users');
const Contact=require('./models/Contacts')
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err.message);
});

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/user' }),
  cookie: { maxAge: 180 * 60 * 1000 } // 3 hours
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(3001,() =>{
    console.log("server is running")
})

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'User not found' });
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return done(null, false, { message: 'Incorrect password' });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).send("An error occurred during login");
    }
    if (!user) {
      console.log("Login failed:", info.message);
      return res.status(400).send(info.message);
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error("Login error:", err);
        return res.status(500).send("An error occurred during login");
      }
      console.log("Login successful:", user);
      return res.send("Success");
    });
  })(req, res, next);
});

app.post('/register', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email.endsWith("@iitdh.ac.in")) {
    return res.status(400).send("Email must be a valid @iitdh.ac.in address");
  }
  try {
    const user = new User({ email, name, password });
    await user.save();
    res.send("Registration successful!");
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).send(err.message);
  }
});

app.get('/main', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("You need to log in first");
  }
  res.send("Welcome to the main page!");
});
app.post('/contacts', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

