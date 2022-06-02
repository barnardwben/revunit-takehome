import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Nav from "./Nav";
import Posts from "./Posts/Posts";
import PostDetail from "./PostsDetails/PostDetails";
import PostByAuthor from "./PostByAuthor/PostByAuthor";
import Search from "./Search/Search";

const axios = require("axios");

function App() {
  // Create a posts variable + setPosts function using useState
  const [posts, setPosts] = useState([]);
  // Create a search variable + setSearch function using useState - Note we will store our search value here
  const [search, setSearch] = useState("");
  // Create a search reference to clear input after search submit
  const searchRef = useRef(null);

  useEffect(() => {
    // Fetch posts and set the response to our posts var
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err, "had error");
      });
  }, []);

  // Prevent our search form from submitting
  const handleSearch = (e) => {
    e.preventDefault();
  };

  if (posts.length > 0) {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          {/* Create our search form - Note this will handle user search to find specific post based on post.id */}
          <form onSubmit={handleSearch} id="search-form">
            <input
              className="search-input"
              type="text"
              ref={searchRef}
              placeholder="Search By Post Id"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/search/${search}`} className="search-link">
              Search
            </Link>
          </form>
          <Routes>
            {/* Create a route with the path leading to page with all posts + pass posts as prop to Posts Component */}
            <Route
              exact
              path="/"
              element={<Posts posts={posts}></Posts>}
            ></Route>

            {/*Loop through our posts to create dynamic routes with the path leading to the users search based on post.id*/}
            {posts.map((post) => {
              return (
                <Route
                  path={`/search/${post.id}`}
                  element={<Search posts={posts} searchId={search}></Search>}
                ></Route>
              );
            })}

            {/*Loop through our posts to create dynamic routes with the path leading to post details using id*/}
            {posts.map((post) => {
              return (
                <Route
                  path={`/post-detail/${post.id}`}
                  element={<PostDetail post={post} />}
                />
              );
            })}

            {/*Loop through our posts to create dynamic routes with the path leading to all author's posts using userId*/}
            {posts.map((post) => {
              return (
                <Route
                  path={`/post-by-author/${post.userId}`}
                  element={
                    <PostByAuthor posts={posts} postAuthor={post.userId} />
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
