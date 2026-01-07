import React, { useState } from "react";

export default function PostItem({ post }) {
  const [showBody, setShowBody] = useState(false);

  return (
    <li>
      <h3
        onClick={() => setShowBody(!showBody)}
        style={{ cursor: "pointer" }}
      >
        {post.title}
      </h3>
      {showBody && <p>{post.body}</p>}
    </li>
  );
}
