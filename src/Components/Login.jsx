import React from "react";
import { Link, redirect } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    function handleSubmit() {
        axios.get("https://login-fgep.onrender.com/signin", {
            email: "email",
            password: "hello"
        }).then((response) => {
            redirect("/gpt");
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div 
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-black"
            style={{
                backgroundImage: "url('back.jpeg')",
                backgroundRepeat: "repeat",
                backgroundSize: "auto" // Ensure the image repeats without scaling
            }}
        >
            <div className=" bg-slate-300 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-10 text-center">Login</h1>
                <form action={handleSubmit}>
                    <div className="mb-10 font-extrabold text-2xl">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="email" id="email" name="email"  value={email}
                            onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="mb-10 font-extrabold text-2xl">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">Login</button>
                </form>
                <div className="text-center mt-5">
                    <h1><Link to="/about" className="text-black-600 hover:underline">Not a User?</Link></h1>
                </div>
            </div>
        </div>
    );
}
