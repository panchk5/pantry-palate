import React, { useState, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState(""); // Remember user input

  const goData = async (userMessage) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Error sending data to server");
        alert("Error sending data to server");
      }

      const botResponse = await response.json();
      const botMessage = botResponse.find((item) => item.type === "text");
      if (botMessage) {
        const newMessages = [
          ...messages,
          { text: userMessage, isUser: true },
          { text: botMessage.payload.message, isUser: false }
        ];
        setMessages(newMessages); // Update messages array with user input and bot response
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    const initialBotMessage = {
      text:
        "How can I help you with reusing your food scraps, or teach you how to plate your dish?",
      isUser: false,
    };
    setMessages([initialBotMessage]);
  }, []);

  const handleUserMessage = (message) => {
    goData(message);
    setInputMessage(""); // Clear input field after sending message
  };

  return (
    <div className="flex flex-col w-96 mx-auto border rounded-md overflow-hidden shadow-md">
      <div className="flex-grow p-4 overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              message.isUser
                ? "bg-gray-100 text-gray self-end"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 rounded-md border focus:outline-none"
          value={inputMessage} // Set input field value from state
          onChange={(e) => setInputMessage(e.target.value)} // Update inputMessage state
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent default behavior (submitting form)
              handleUserMessage(inputMessage);
            }
          }}
        />
      </div>
    </div>
  );
}
