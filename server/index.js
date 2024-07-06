const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Users")

const app= express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/user");
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/login',(req,res)=>{
    const {email,name} =req.body
    UserModel.findOne({email: email})
    .then(user =>{
        if(user)
        {
            if(user.password===password)
            {
                res.json("Success")
            }
            else
            {
                res.json("The password is incorrect")
            }
        }
        else
        {
            res.json("user doesnt exist kindly register")
        }
    })
})

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})




//bCdK2KWWQc20FSHH
//mongodb config

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lib-books:bCdK2KWWQc20FSHH@lib-mgmt-cluster.lp5sak8.mongodb.net/?retryWrites=true&w=majority&appName=lib-mgmt-cluster";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try{
        await client.connect();

        const bookCollections= client.db("BookInventory").collection("Books")
        //inserting a book
        app.post("/upload-book",async(req,res) =>{
            const data=req.body
            const result= await bookCollections.insertMany(data)
            res.send(result)
        })
        //all books
        /*app.get("/all-books",async(req,res)=>{
            const books= bookCollections.find()
            const result= await books.toArray()
            res.send(result)
        })*/
        //update books method
        app.patch("/book/:id",async(req,res)=>{
            const id=req.params.id
            //console/log(id)
            const updateBookData=req.body
            const filter={ _id: new ObjectId(id) }
            const updatedDoc={
                $set:{
                    ...updateBookData
                }
            }
            const options={ upsert:true }

            const result= await bookCollections.updateOne(filter,updatedDoc,options)
            res.send(result)
        })

        //delete book
        app.delete("/book/:id",async (req,res)=>{
            const id=req.params.id
            const filter={ _id: new ObjectId(id) }
            const result= await bookCollections.deleteOne(filter)
            res.send(result)
        })
        //single book data
        app.get("/book/:id",async(req,res)=>{
            const id = req.params.id
            const filter={ _id: new ObjectId }
            const result= await bookCollections.findOne(filter)
            res.send(result)
        })
        //filter out by categories
        app.get("/all-books", async (req, res) => {
            let query = {};
            if (req.query?.department) {
                query = { department: req.query.department }
            }
            const result = await bookCollections.find(query).toArray();
            res.send(result)
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally 
    {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir)

app.listen(3001,() =>{
    console.log("server is runnin")
})