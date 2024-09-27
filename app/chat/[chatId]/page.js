"use client";
import { useRouter } from "next/navigation"; // Update this line
import ChatWindow from "../../../components/ChatWindow";

const ChatPage = ({ params }) => {
  const { chatId } = params;

  return (
    <div>
      <ChatWindow chatId={chatId} />
    </div>
  );
};

export default ChatPage;
