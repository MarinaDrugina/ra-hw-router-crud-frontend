import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:7070/posts")
      .then((res) => res.data.find((d) => d.id == id))
      .then((p) => setPost(p.content));
  }, [id]);

  return <div className="card">{post}</div>;
}
