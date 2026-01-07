import React from "react";
import SinglePost from "./components/SinglePost";
import UsersList from "./components/UsersList";
import LoadPostsOnClick from "./components/LoadPostsOnClick";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Single Post</h1>
      <SinglePost />

      <h1>Users List</h1>
      <UsersList />

      <h1>Load Posts on Button Click</h1>
      <LoadPostsOnClick />
    </div>
  );
}
