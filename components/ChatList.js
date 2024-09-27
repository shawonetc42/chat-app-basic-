import React from "react";
import Link from "next/link";

const ChatList = ({ chats }) => {
  return (
    <div className="chat-list w-full max-w-sm bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold p-4 border-b border-gray-200">Chats</h2>
      <ul>
        {chats.length > 0 ? (
          chats.map((chat) => (
            <li
              key={chat.id}
              className="p-4 border-b border-gray-200 hover:bg-gray-100"
            >
              <Link href={`/chat/${chat.id}`}>
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold">{chat.name}</p>
                    <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="p-4 text-gray-500">No chats available.</p>
        )}
      </ul>
    </div>
  );
};

export default ChatList;
