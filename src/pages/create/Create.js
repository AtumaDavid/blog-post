import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

//styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  //useHistory
  const history = useHistory();

  //post info
  const { postData, data } = useFetch("http://localhost:3000/post", "POST");

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      article,
    });
  };

  //redirect the user when we get data response
  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data, history]);

  return (
    <div className="create">
      <h3> Add New Articles</h3>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Article Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Article:</span>
          <textarea
            onChange={(e) => setArticle(e.target.value)}
            value={article}
            required
          />
        </label>

        <button className="btn">Submit Article</button>
      </form>
    </div>
  );
}
