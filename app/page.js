"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import ChatList from "../components/ChatList"; // Import ChatList component

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [chats, setChats] = useState([]); // State to hold chats

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await axios.get("/api/users");
      setUsers(usersResponse.data);

      const conversationsResponse = await axios.get("/api/conversations");
      setConversations(conversationsResponse.data);

      // Fetch chat list (replace this with actual API endpoint)
      const chatListResponse = await axios.get("/api/chats");
      setChats(chatListResponse.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <UserList users={users} />
      <ChatList chats={chats} /> {/* Display chat list */}
    </div>
  );
};

export default HomePage;
