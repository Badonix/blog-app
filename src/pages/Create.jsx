import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
function Create() {
  return (
    <section className="create-section">
      <div className="make-section-container">
        <img
          className="create-post-cover"
          src="https://img.freepik.com/premium-photo/starry-sky-night-stars-deep-space-sky-galactic-nebula-view-elements-this-iamge-furnished-by-nasa_372999-7175.jpg?w=2000"
        />
        <div className="top-inputs">
          <label htmlFor="upload-image">
            <MdOutlineFileUpload className="upload-icon" />
          </label>
          <input type="file" id="upload-image" className="file-upload" />
          <input
            type="text"
            className="title-input"
            placeholder="Title for your blog..."
          />
          <button className="publish-btn">Publish</button>
        </div>
        <textarea
          className="blog-text-input"
          placeholder="Tell us your story..."
        />
      </div>
    </section>
  );
}

export default Create;
