import React from "react";
import PaintUI from "../PaintUI/PaintUI";

const Posts = ({ posts }) => {
  return (
    <div>
      <h2>All posts</h2>
      {/* Pass all posts to our PaintUI component */}
      <PaintUI posts={posts} />
    </div>
  );
};

export default Posts;
