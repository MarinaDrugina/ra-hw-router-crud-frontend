import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostView({match}) {
  const [post, setPost] = useState('');
  const id = match.params.id;

  useEffect(() => {
    axios.get("http://localhost:7070/posts").then(res => res.data.find(d => d.id == id)).then(p => setPost(p.content))
  }, [id])

  return (
    <div className="card">
      {post}
    </div>
  );
}