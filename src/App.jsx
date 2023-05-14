import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import uniqid from 'uniqid';

import Post from './Components/Post';
import CreatePost from './Components/CreatePost';
import PostView from './Components/PostView';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/posts").then(response => setData(response.data));
  });

  return (
    <div className="App">
      <Router>
        <Link to="/posts">
          <button className="button">Домашняя страница</button>
        </Link>
        <Link to="/posts/new">
          <button className="button">Создать пост</button>
        </Link>
        <Switch>
          <Route path="/posts/new" exact component={CreatePost} />
          <Route path="/posts/:id" exact component={PostView} />
          <Route
            path="/posts"
            exact
            component={() => data.map(post => <Post key={uniqid()} post={post} />)}
          />
        </Switch>
      </Router>
    </div>
  );
}