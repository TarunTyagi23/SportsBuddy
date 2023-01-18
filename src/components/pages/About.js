import React from "react";
import "../../App.css";
import Carditem from "../Carditem";
import "../Card.css";

// import Card from "../Card";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import Image from "../Image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="hero-container-about">
        <video src="/vedios/vedio-about.mp4" autoPlay loop muted />
        <h1>
          Sports Buddy has the perfect indoor stadium for practising and playing
          your favourite sport in all seasons.
        </h1>
      </div>

      <Footer />
    </>
  );
}
