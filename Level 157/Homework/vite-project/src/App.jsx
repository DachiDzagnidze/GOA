import React from "react";
import SinglePost from "./components/SinglePost";
import UsersList from "./components/UsersList";
import LoadPostsOnClick from "./components/LoadPostsOnClick";

export default function App() {
  const sectionStyle = { marginBottom: "20px" }; // reusable style

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div style={sectionStyle}>
        <h1>Single Post</h1>
        <SinglePost />
      </div>

      <div style={sectionStyle}>
        <h1>Users List</h1>
        <UsersList />
      </div>

      <div style={sectionStyle}>
        <h1>Load Posts on Button Click</h1>
        <LoadPostsOnClick />
      </div>
    </div>
  );
}
