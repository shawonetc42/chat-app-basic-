const ConversationList = ({ conversations }) => {
  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <h3>{conversation.title}</h3>
            <p>{conversation.lastMessage}</p>
            <time>{new Date(conversation.timestamp).toLocaleString()}</time>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
