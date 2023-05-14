import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CreatePost() {
  const [postText, setPostText] = useState('');

  const handleChange = e => {
    const text = e.target.value;
    setPostText(text);
  };

  const handleClick = () => {
    const newNote = { id: 0, content: postText };

    axios.post("http://localhost:7070/posts", newNote);
  };

  return (
    <div className="card">
      <h1>Create post</h1>
      <textarea rows="6" cols="50" onChange={handleChange} />
      <Link to="/posts" onClick={handleClick}>
        <button className="button">Опубликовать</button>
      </Link>
    </div>
  );
}