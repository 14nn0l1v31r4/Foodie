import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testemunhos = () => {
  return (
<div className="work-section-wrapper">
    <div className="work-section-top">
    <p className="primary-subheading">Testemunhos</p>
    <h1 className="primary-heading">O Que Eles Estão Comentando?</h1>
    <p className="primary-text">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
    </p>
    </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" ></img>
        <p>
            Adoro a comida! Estão de parabéns!
        </p>
        <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>João Dias</h2>
    </div>
</div>
    
  )
}

export default Testemunhos