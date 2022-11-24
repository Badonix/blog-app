import React from "react";
import Post from "../components/Post";
import { Link } from "react-router-dom";
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
          <Link className="post-cont-a" to="/blog/1">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/2">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/3">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/4">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/5">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/6">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/7">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/8">
            <Post />
          </Link>
          <Link className="post-cont-a" to="/blog/9">
            <Post />
          </Link>
        </main>
      </section>
    </>
  );
}

export default HomePage;
