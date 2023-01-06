import React from "react";

export default function Blogpost({ post }) {
  return (
    <div className="blog-post">
      {post.map((writeUps) => (
        <div className="blog-post-card" key={writeUps.id}>
          <h3>{writeUps.title}</h3>
          <p>{writeUps.article.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
