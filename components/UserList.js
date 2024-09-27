import Link from "next/link";

const UserList = ({ users }) => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-lg">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="cursor-pointer p-2 hover:bg-gray-200">
            <Link href={`/chat/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
