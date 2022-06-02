import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaintUI from "../PaintUI/PaintUI";

const PostByAuthor = ({ posts, postAuthor }) => {
  // Create our new array of posts from filtered results based on postAuthor (aka post.userId)
  const [userPosts] = useState(
    posts.filter((post) => post.userId.toString() === postAuthor.toString())
  );

  return (
    <>
      <h2>Author {postAuthor}'s posts</h2>
      {/* Pass all Authors posts to our PaintUI component */}
      <PaintUI posts={userPosts} />
    </>
  );
};

export default PostByAuthor;
