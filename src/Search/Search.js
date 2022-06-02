import React from "react";
import PaintUI from "../PaintUI/PaintUI";

const Search = ({ posts, searchId }) => {
  // Create var to store our searched post after filtering posts by searchId (aka post.id)
  const currentPost = posts.filter(
    (post) => post.id.toString() === searchId.toString()
  );

  if (currentPost.length > 0) {
    return (
      <>
        <h2>Searched Post {posts.id}</h2>
        {/* Pass searched post to our PaintUI component */}
        <PaintUI posts={currentPost} />
      </>
    );
  }
};

export default Search;
