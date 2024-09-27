"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import ChatList from "../components/ChatList"; // Import ChatList component

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
    <div className="flex flex-col">
      <div className="mb-4">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="flex">
        {/* Conditionally display UserList only if searchQuery has value */}
        {searchQuery.trim() && <UserList users={filteredUsers} />}

        {/* Display chat list */}
        <ChatList chats={chats} />
      </div>
    </div>
  );
};

export default HomePage;
