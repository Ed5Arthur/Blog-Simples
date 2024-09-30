import React, { useState } from "react";
import "./PostItem.css";
import dayjs from "dayjs";

const PostItem = ({ post, updatePost, deletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [postText, setPostText] = useState(post.title);

  const handleUpdate = () => {
    updatePost({ ...post, title: postText });
    setIsEditing(false);
  };

  return (
    <li className="post-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
          <button onClick={handleUpdate}>Salvar</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>
            Publicado em: {dayjs(post.createdAt).format("DD/MM/YYYY HH:mm")}
          </p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deletePost(post.id)}>Excluir</button>
        </>
      )}
    </li>
  );
};

export default PostItem;
