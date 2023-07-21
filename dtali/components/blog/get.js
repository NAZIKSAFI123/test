import axios from "axios";
import React from "react";

const baseURL = "http://localhost:9999/posts";

export default function Get() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1> welcome</h1>
      <p>{post.commentaire}</p>
    </div>
  );
}