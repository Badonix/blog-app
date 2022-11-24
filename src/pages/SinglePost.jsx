import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
function SinglePost() {
  return (
    <>
      <main className="single-post-info-cont">
        <div className="single-edit-icons">
          <RiDeleteBinLine className="delete-icon" />
          <AiOutlineEdit className="edit-icon" />
        </div>
        <div className="single-post-about">
          <h3 className="single-post-author">Author: George</h3>
          <h3 className="single-post-date">21 hours ago</h3>
        </div>
        <h1 className="single-post-title">Blog Title</h1>
        <div className="single-post-desc-cont">
          <p className="single-post-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            impedit laudantium quae eos, odit nihil laboriosam ducimus ut ad
            porro, itaque sapiente totam quis quidem delectus expedita! Sed
            quasi atque dolores, quisquam id, reprehenderit eligendi perferendis
            et dignissimos itaque minima distinctio temporibus sunt aspernatur
            repellat nobis sit fugit tempore, quidem pariatur? Voluptate
            voluptatem soluta odit dicta obcaecati accusantium, cum expedita
            dolorum consectetur. Molestias doloremque architecto quas quod
            possimus blanditiis quos adipisci reprehenderit illo, temporibus
            veritatis molestiae hic aliquam sequi alias cum? Nam, dolores. Esse,
            aliquam reiciendis amet inventore nam facere. Accusamus, neque
            architecto aliquam ratione commodi tenetur. Expedita, vel quas!
          </p>
        </div>
        <img
          className="single-post-img"
          src="https://img.freepik.com/premium-photo/starry-sky-night-stars-deep-space-sky-galactic-nebula-view-elements-this-iamge-furnished-by-nasa_372999-7175.jpg?w=2000"
        />
      </main>
    </>
  );
}

export default SinglePost;
