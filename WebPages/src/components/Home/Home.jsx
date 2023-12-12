import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="section1">
      <div className="left">
        <img src="src/assets/White.Rj.png" alt="Rajeev" />
      </div>
      <div className="right">
        <h3>Hello I'm</h3>
        <h1>Rajeev Bhardwaj</h1>
        <h2>Web Designer & Devloper</h2>
        <div className="btn">
          <button className="btn1">Resume</button>
          <button className="btn2">
            <Link to="contactUs">ContactUs</Link>
          </button>
        </div>
        <div className="smlinks">
          <a href="https://www.linkedin.com/in/rj-rajeev/">
            <img src="src/assets/linkedin-box-fill.png" alt="" />
          </a>
          <a href="https://github.com/rj-Rajeev">
            <img src="src/assets/github-fill.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
