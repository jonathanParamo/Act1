import UserCard from "./UserCard";

const UserList = ({ dataList }) => {
  return (
    <div className="h-screen flex flex-wrap justify-between items-start overflow-hidden">
      {dataList.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList;