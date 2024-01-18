import { useState, useEffect } from "react";

const FetchPosts = () => {
  //JSON placeholder
  // id, title, body

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts (Fetch API)</h1>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchPosts;
