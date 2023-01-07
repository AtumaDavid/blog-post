import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

//styles
import "./Article.css";

export default function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/post/" + id;
  const { error, isPending, data } = useFetch(url);
  return (
    <div className="article">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h3>{data.title}</h3>
          <p>{data.article}</p>
        </>
      )}
    </div>
  );
}
