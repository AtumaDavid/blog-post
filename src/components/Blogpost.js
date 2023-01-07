import React from "react";
import { Link } from "react-router-dom";

//styles
import "./Blogpost.css";

export default function Blogpost({ post }) {
  return (
    <div className="blog-post">
      {post.map((writeUps) => (
        <div className="blog-post-card" key={writeUps.id}>
          <h3>{writeUps.title}</h3>
          <p>
            {writeUps.article.substring(0, 200)}...{" "}
            <Link to={`/article/${writeUps.id}`}>Read more</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
