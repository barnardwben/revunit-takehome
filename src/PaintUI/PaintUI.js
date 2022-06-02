import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PaintUI.scss";

const PaintUI = ({ posts }) => {
  let [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    updatePost();
  }, []);

  // Create function to update posts we want to view and paint them to UI
  const updatePost = () => {
    setAllPosts(() => {
      return posts.map((post) => {
        return (
          <div className="post-links-container">
            <h3 className="post-title"> {post.title}</h3>
            <p className="post-detail">{`${post.body.slice(0, 55)}...`}</p>

            {/* In post, add link that leads to all authors post */}
            <Link
              to={`/post-by-author/${post.userId}`}
              className="user-links"
              key={post.userId}
            >
              Posts By Author
            </Link>
            {/* In post, add link that leads to post info (title, description, Comments(name, comment, email)) */}
            <Link
              to={`/post-detail/${post.id}`}
              className="post-links"
              key={post.id}
            >
              Read More
            </Link>
          </div>
        );
      });
    });
  };

  return <div className="all-posts-container">{allPosts}</div>;
};

export default PaintUI;
