import React from "react";
import img from "../images/section-pattern.png";
function Post() {
  return (
    <article className="post">
      <img
        className="post-img"
        src="https://img.freepik.com/premium-photo/starry-sky-night-stars-deep-space-sky-galactic-nebula-view-elements-this-iamge-furnished-by-nasa_372999-7175.jpg?w=2000"
      />
      <div className="post-about">
        <h2 className="post-title">Post Title</h2>
        <div className="post-tags">
          <h3>Life |</h3>
          <h3>Gaming |</h3>
          <h3> Roblox</h3>
        </div>
        <p className="post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          facilis perferendis, animi neque officiis dolorem repudiandae. Rem
          nulla voluptate, vero voluptatibus quae aut ipsam unde aliquid! Eaque
          facere corporis illo.
        </p>
      </div>
      <p className="post-date">21 hours ago</p>
    </article>
  );
}

export default Post;
