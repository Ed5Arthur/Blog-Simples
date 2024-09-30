import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import dayjs from "dayjs";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(
          data
            .slice(0, 10)
            .map((post) => ({
              ...post,
              createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
            }))
            .sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))) // Ordena por data
        );
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (post) => {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    });
    const newPost = await response.json();
    setPosts(
      (prevPosts) =>
        [
          ...prevPosts,
          { ...newPost, createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss") },
        ].sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))) // Ordena por data
    );
  };

  const updatePost = async (updatedPost) => {
    const response = await fetch(`${API_URL}/${updatedPost.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedPost),
      headers: { "Content-Type": "application/json" },
    });
    const newPost = await response.json();
    setPosts(
      (prevPosts) =>
        prevPosts
          .map((post) =>
            post.id === newPost.id
              ? { ...newPost, createdAt: post.createdAt }
              : post
          )
          .sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))) // Ordena por data
    );
  };

  const deletePost = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setPosts(
      (prevPosts) =>
        prevPosts
          .filter((post) => post.id !== id)
          .sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))) // Ordena por data
    );
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <PostForm addPost={addPost} />
          <PostList
            posts={posts}
            updatePost={updatePost}
            deletePost={deletePost}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
