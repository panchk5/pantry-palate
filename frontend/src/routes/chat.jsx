import { useState, useEffect } from "react";

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
      console.log(botResponse);

      const botMessage = botResponse.find((item) => item.type === "text");
      if (botMessage) {
        const newMessages = [
          ...messages,
          { text: userMessage, isUser: true },
          { text: botMessage.payload.message, isUser: false },
        ];
        setMessages(newMessages); // Update messages array with user input and bot response
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    const initialBotMessage = {
      text: "How can I help you with reusing your food scraps, or teach you about cooking?",
      isUser: false,
    };
    setMessages([initialBotMessage]);
  }, []);

  const handleUserMessage = (message) => {
    goData(message);
    setInputMessage(""); // Clear input field after sending message
  };

  return (
    <>
      <div className='lg:m-auto lg:max-w-[40%] mx-[6%] flex flex-col'>
        <div className="flex justify-between mb-10">
          <h1 className='text-4xl font-medium text-white'>AI Assistant</h1>
          <a className='bg-dark text-white rounded-full py-2 px-4' href="/">&lt;</a>
        </div>
        <div className="flex flex-col w-full md:w-[80%] lg:w-[90%] max-w-2xl mx-auto border rounded-md overflow-hidden shadow-md">
          <div className="flex-grow p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 p-2 px-3 rounded-lg ${message.isUser
                  ? "bg-blue-500 text-white self-end bg-darkblue text-right"
                  : "bg-gray-200 text-gray-800 self-start"
                  }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 rounded-md border focus:outline-none break-words"
              style={{
                height: "auto", // Allow the input to expand
                resize: "none", // Prevent resizing
                overflow: "hidden", // Hide overflow content
              }}
              value={inputMessage} // Set input field value from state
              onChange={(e) => {
                setInputMessage(e.target.value);// Update inputMessage state
                e.target.style.height = "auto"; // Reset height before adjusting
                e.target.style.height = `${e.target.scrollHeight}px`; // Adjust height based on content
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // Prevent default behavior (submitting form)
                  handleUserMessage(inputMessage);
                }
              }}
            />

            <button
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-3xl bg-darkblue"
              onClick={() => handleUserMessage(inputMessage)}
            >
              ➔
            </button>
          </div>
        </div>
      </div >
    </>
  );
}
