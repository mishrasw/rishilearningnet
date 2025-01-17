import React from "react";
import ImageSlider from "../ImageSlider"
import { Link } from "react-router-dom";
import BannerImage from "../assets/lightblue1.png";
import "../style/Home.css";
import { TextField } from "@mui/material";
import Square from "../helpers/Square"
import AnimatedTextImage from "../helpers/AnimatedTextImage";
import imgPW from "../assets/pw_framework.png"
import imgSE from "../assets/SeleniumTraining.png"
import imgMob from "../assets/appium.png"
import imgApi from "../assets/rest_assured.png"
import kids1 from "../assets/kids_images1.png"
import kids2 from "../assets/kids_image2.png"
import kids3 from "../assets/kids_image3.png"

const text1=["one", "two", "three"]
const images=[kids1,kids2,kids3]


//<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
function Home() {
  return (
<div>
    <div className="home">
    <div className="homeTop">
    <div style={{padding: "10px"}}>
        <ImageSlider images={images}/>
      </div>
    </div>
      <div className="homeBottom" style={{ color: 'white' }}>
        <p>Welcome to RishiLearning, the ultimate online destination designed to boost your 
        child's learning skills in a fun, engaging, and interactive way.</p>
       <p>Our mission is to 
      create a safe and inspiring digital space where kids can explore, learn, and grow 
      at their own pace.</p>
   </div>    
    </div>
    </div>
  );
}

export default Home;
