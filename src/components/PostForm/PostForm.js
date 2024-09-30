import React, { useState } from "react";
import "./PostForm.css";

const PostForm = ({ addPost }) => {
  const [postTitle, setPostTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title: postTitle, body: "", userId: 1 });
    setPostTitle("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="Novo post"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default PostForm;
