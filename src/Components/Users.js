import React from "react";

const users = [
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/men/92.jpg",
  "https://randomuser.me/api/portraits/men/66.jpg",
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/women/13.jpg",
  "https://randomuser.me/api/portraits/men/36.jpg",
  "https://randomuser.me/api/portraits/men/58.jpg",
  "https://randomuser.me/api/portraits/women/58.jpg",
];

function Users() {
  return (
    <div className="users">
      {users.map((user) => (
        <img src={user} alt="profile-pic" />
      ))}
    </div>
  );
}

export default Users;
