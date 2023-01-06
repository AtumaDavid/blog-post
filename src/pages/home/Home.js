import React from "react";
import { useFetch } from "../../hooks/useFetch";

//components
import Blogpost from "../../components/Blogpost";

//styles
import "./Home.css";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/post");

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <Blogpost post={data} />}
    </div>
  );
}
