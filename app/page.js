"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import ChatList from "../components/ChatList";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [chats, setChats] = useState([]); // State to hold chats
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered user list

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await axios.get("/api/users");
      setUsers(usersResponse.data);
      setFilteredUsers(usersResponse.data); // Set initial filtered users

      const conversationsResponse = await axios.get("/api/conversations");
      setConversations(conversationsResponse.data);

      // Fetch chat list (replace this with actual API endpoint)
      const chatListResponse = await axios.get("/api/chats");
      setChats(chatListResponse.data);
    };

    fetchData();
  }, []);

  // Update filtered users when search query changes
  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(result);
  }, [searchQuery, users]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 my-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Chat Application
        </h1>

        {/* Search input */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        <div className="flex space-x-6">
          {/* Conditionally display UserList only if searchQuery has value */}
          {searchQuery.trim() && (
            <div className="w-1/3 bg-gray-50 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Search Results
              </h2>
              <UserList users={filteredUsers} />
            </div>
          )}

          {/* Display chat list */}
          <div
            className={`w-full ${
              searchQuery.trim() ? "w-2/3" : "w-full"
            } bg-gray-50 rounded-lg shadow-lg p-4`}
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Recent Conversations
            </h2>
            <ChatList chats={chats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
