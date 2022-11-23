import React from "react";
import Post from "../components/Post";
function HomePage() {
  return (
    <>
      <section className="landing">
        <h1>BadiBlog</h1>
        <h2>Magari Blog</h2>
      </section>
      <section className="posts">
        <h2 className="posts-section-title">Posts</h2>
        <main className="posts-cont">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </section>
    </>
  );
}

export default HomePage;
