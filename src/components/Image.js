import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div className="image-container">
      <figure className="hero-container-about" data-category={props.label}>
        <img src={props.src} alt="About Image" className="about__item__img" />
        <h1>{props.text}</h1>
      </figure>
    </div>
  );
}

export default Image;
