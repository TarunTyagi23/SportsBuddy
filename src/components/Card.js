import React from "react";
import Carditem from "./Carditem";
import "./Card.css";

function card() {
  return (
    <div className="cards">
      <h1>Our Facilities</h1>
      <h2>One Place For All Your Needs</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="images/badminton.jpg"
              text="Badminton is like ballet dancing, it requires a lot of control , strength, mind play and measure movement."
              label="BADMINTON"
              path="/services"
            />
            <Carditem
              src="images/gym.jpg"
              text="Today I will do what others won’t, so tomorrow I can do what others can’t."
              label="GYM"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="images/table-tennis.jpg"
              text="It’s difficult for most people to imagine the creative process in tennis. The one who gets it, creates opportunity for himself."
              label="TABLE TENNIS"
              path="/services"
            />
            <Carditem
              src="images/karate.jpg"
              text="Karate is a very boring sport, but when you know the technique you can go further and further."
              label="KARATE"
              path="/services"
            />
            <Carditem
              src="images/boxing.jpg"
              text="In life and in a boxing ring, the defeat is not declared when you fall down. It is declared only when you refuse to get up."
              label="BOXING"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default card;
