import { useEffect, useState } from "react";
import axios from "axios";

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("user1"); // Assuming current user is Alice

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/messages/${chatId}`);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      try {
        const response = await axios.post(`/api/messages/${chatId}`, {
          text: newMessage,
          senderId: currentUser,
          senderName: currentUser === "user1" ? "Alice" : "Bob", // Mock sender name based on current user
        });
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setNewMessage(""); // Clear input after sending
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Chat ID: {chatId}</h2>
      <div className="space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-2 rounded-md ${
              message.senderId === currentUser
                ? "bg-blue-500 text-white text-right"
                : "bg-gray-300 text-black text-left"
            }`}
          >
            <p className="text-sm">
              <strong>{message.senderName}:</strong> {message.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="border p-2 flex-grow rounded-md mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
