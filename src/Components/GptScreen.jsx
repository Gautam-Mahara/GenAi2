import React, { useState } from "react";
import axios from "axios";

export default function ChatScreen() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSendMessage = async () => {
        if (input.trim() !== "") {
            const newMessages = [...messages, { sender: "user", text: input }];
            setMessages(newMessages);
            const userMessage = input;
            setInput("");

            try {
                const response = await axios.post("http://127.0.0.1:5000/generate", { message: userMessage });
                const botMessage = response.data.message; // Adjust this based on your API response structure

                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "bot", text: botMessage }
                ]);
            } catch (error) {
                console.error("Error fetching bot response:", error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "bot", text: "Sorry, something went wrong." }
                ]);
            }
        }
    };

    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 p-4">
            <div className="w-full max-w-2xl flex flex-col bg-white shadow-2xl rounded-lg overflow-hidden">
                <div className="flex flex-col h-96 p-4 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`my-2 p-3 max-w-xs rounded-lg ${
                                message.sender === "user"
                                    ? "bg-blue-600 text-white self-end"
                                    : "bg-gray-300 text-gray-800 self-start"
                            }`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="flex p-4 border-t border-gray-300">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
