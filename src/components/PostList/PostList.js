import React from "react";
import "./PostList.css";
import PostItem from "../PostItem/PostItem";

const PostList = ({ posts, updatePost, deletePost }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      ))}
    </ul>
  );
};

export default PostList;
