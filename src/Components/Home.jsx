import React from "react";
import NavBar from "./NavBar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
    <NavBar />
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={ BannerBackground} alt=""></img>
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">
            Sua comida favorita entregue quente e fresca!
            </h1>
            <p className="primary-text">
            Os chefs que mudam de forma saudável fazem todo o trabalho de preparação, como descascar, picar
            e marinar, para que você possa cozinhar uma comida fresca.
            </p>
            <button className="secondary-button">
                Peça Agora! <FiArrowRight></FiArrowRight>
            </button>
        </div>
        <div className="home-image-container">
            <img src={ BannerImage} alt=""></img>
        </div>
    </div>
    </div>
    );
};


export default Home;