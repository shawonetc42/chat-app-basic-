export async function GET() {
  // Example chat data
  const chats = [
    {
      id: "1",
      name: "John Doe",
      lastMessage: "Hey, how are you?",
    },
    {
      id: "2",
      name: "Jane Smith",
      lastMessage: "Let's catch up later.",
    },
  ];

  return new Response(JSON.stringify(chats), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
