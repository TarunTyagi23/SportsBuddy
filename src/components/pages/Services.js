import React from "react";
import "../../App.css";
import Card from "../Card";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Image from "../Image";

export default function Services() {
  return (
    <>
      <Navbar />
      <Image
        src="images/young-gym.jpg"
        text="You’ve come to the right place if you want to have a good time alone, with friends or loved ones"
      />
      <Card />
      <Footer />
    </>
  );
}
