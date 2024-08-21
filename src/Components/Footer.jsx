import React from 'react'
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
<div className="footer-wrapper">
    <div className="footer-section-one">
    <div className="footer-logo-container">
        <img src={Logo} alt="Logo" ></img>
    </div>
    <div className="footer-icons">
        <BsTwitter />
        <SiLinkedin/>
        <BsYoutube />
        <FaFacebookF/>
    </div>
    </div>
    <div className="footer-section-two">
        <div className="footer-section-columns">
            <span>Qualidade</span>
            <span>Suporte</span>
            <span>Compartilhar</span>
            <span>Carreira</span>
            <span>Testemunhos</span>
            <span>Trabalho</span>
        </div>
        <div className="footer-section-columns">
            <span>4002-8922</span>
            <span>contate@foodie.com</span>
            <span>ola@foodie</span>
            
        </div>
        <div className="footer-section-columns">
            <span>Termos e Condições</span>
            <span>Privacidade</span>
        </div>
    </div>
        
    </div>
  )
}

export default Footer