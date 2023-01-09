import React from "react";
import { useLocation } from "react-router-dom";
import Blogpost from "../../components/Blogpost";
import { useFetch } from "../../hooks/useFetch";

//styles
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/post?q=" + query;
  const { error, isPending, data } = useFetch(url);
  return (
    <div>
      <h2>Articles including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <Blogpost post={data} />}
    </div>
  );
}
