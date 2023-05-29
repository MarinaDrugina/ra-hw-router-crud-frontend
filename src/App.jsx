import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import uniqid from "uniqid";

import Post from "./Components/Post";
import CreatePost from "./Components/CreatePost";
import PostView from "./Components/PostView";

export default function App() {
  const [data, setData] = useState([]);

  async function getPosts() {
    const response = await axios.get("http://localhost:7070/posts");
    const data = await response.data;
    setData(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      {/* <Browser */}
      <BrowserRouter>
        <Link to="/posts">
          <button className="button">Домашняя страница</button>
        </Link>
        <Link to="/posts/new">
          <button className="button">Создать пост</button>
        </Link>

        <Routes>
          <Route path="/posts/new" Component={CreatePost} />
          <Route path="/posts/:id" Component={PostView} />
          <Route
            path="/posts"
            Component={() =>
              data?.map((post) => <Post key={uniqid()} post={post} />)
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
