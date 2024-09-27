export async function GET() {
  // Return the mock conversations data
  const conversations = [
    {
      id: "1",
      participants: ["user1", "user2"],
      messages: [
        {
          id: "msg1",
          sender: "user1",
          text: "Hello, how are you?",
          timestamp: "2024-09-27T10:00:00Z",
        },
        {
          id: "msg2",
          sender: "user2",
          text: "I am good, thank you!",
          timestamp: "2024-09-27T10:01:00Z",
        },
      ],
    },
    {
      id: "2",
      participants: ["user1", "user3"],
      messages: [
        {
          id: "msg3",
          sender: "user1",
          text: "Are you coming to the meeting?",
          timestamp: "2024-09-27T11:00:00Z",
        },
        {
          id: "msg4",
          sender: "user3",
          text: "Yes, I will be there.",
          timestamp: "2024-09-27T11:05:00Z",
        },
      ],
    },
  ];

  return new Response(JSON.stringify(conversations), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
