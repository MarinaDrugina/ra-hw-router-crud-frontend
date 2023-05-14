export default function Post({post}) {
    return (
        <div className="card">
          <div className="close"></div>
          <img className="avatar" src="https://placeholder.com/200" alt="avatar"></img>
          <div className="author">Author: Lorem</div>
          <div>Created: {post.created} ago</div>
          <h1>{post.content}</h1>
        </div>
      );
}