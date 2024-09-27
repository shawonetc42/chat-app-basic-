import { NextResponse } from "next/server";

let messagesData = {
  1: [
    {
      id: "1",
      text: "Hello! How are you?",
      senderId: "user1",
      senderName: "Alice",
    },
    {
      id: "2",
      text: "I'm good, thanks! How about you?",
      senderId: "user2",
      senderName: "Bob",
    },
  ], // Chat ID 1 messages
  2: [
    {
      id: "3",
      text: "Hey! Ready for the meeting?",
      senderId: "user1",
      senderName: "Alice",
    },
    {
      id: "4",
      text: "Yes, I am. Let's go!",
      senderId: "user2",
      senderName: "Bob",
    },
  ], // Chat ID 2 messages
};

export async function POST(req, { params }) {
  const chatId = params.chatId;
  const { text, senderId, senderName } = await req.json();

  const newMessage = {
    id: Date.now().toString(),
    text,
    senderId, // Sender's ID
    senderName, // Sender's Name
  };

  // Store the new message in the corresponding chatId
  if (!messagesData[chatId]) {
    messagesData[chatId] = [];
  }
  messagesData[chatId].push(newMessage);

  return NextResponse.json(newMessage, { status: 201 });
}

export async function GET(req, { params }) {
  const chatId = params.chatId;

  // Return the messages for the corresponding chatId
  return NextResponse.json(messagesData[chatId] || []);
}
