import { useEffect, useState } from "react";
import "./PostDetails.scss";

let axios = require("axios");

const PostDetail = ({ post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch post comments based upon post id and set the response to our comments var
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Create var to hold an array of all post comments after looping through to create style of comments UI
  let displayComments = comments.map((comment) => {
    return (
      <div key={comment.id} className="comment-container">
        <div className="comment">
          <div className="comment-detail">Name:</div>
          <div>{comment.name}</div>
        </div>
        <div className="comment">
          <div className="comment-detail">Comment:</div>
          <div>{comment.body}</div>
        </div>
        <div className="comment">
          <div className="comment-detail">Email:</div>
          <div>{comment.email}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="main-page">
      <h3>Post Title: {post.title}</h3>
      <div className="post-desc-container">
        <h4 className="post-desc">Post Description:</h4> {post.body}
      </div>
      <h2>Comments:</h2>
      <div className="comments-section">{displayComments}</div>
    </div>
  );
};

export default PostDetail;
