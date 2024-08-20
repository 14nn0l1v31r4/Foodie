import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">Sobre</p>
            <h1 className="primary-heading">
            A comida é uma parte importante de uma dieta equilibrada
            </h1>
            <p className="primary-text">
                ((adicioanr texto))
            </p>
            <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
            </button>
        </div>
    </div>
    </div>
  )
}
export default About;
