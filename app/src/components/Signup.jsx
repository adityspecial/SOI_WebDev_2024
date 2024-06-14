import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div
                className="hidden bg-cover lg:block lg:w-1/2"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}
            ></div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                

                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Create new account!!
                </p>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 float-left" htmlFor="LoggingEmailAddress">Name</label>
                    <input
                        id="SignupName"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="required"
                    />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 float-left" htmlFor="LoggingEmailAddress">Email Address</label>
                    <input
                        id="SignupEmailAddress"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="email"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                        
                    </div>

                    <input
                        id="SignupPassword"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="password"
                    />
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>

            
            </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
      </div>
  );
};

