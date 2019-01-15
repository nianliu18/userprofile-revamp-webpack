import React from 'react';
import nianImg from '.././images/profile-nl.jpg';


const About = (props) => {
  return (
    <div className="container">
      <div className="about-container">
        <h1 className="home-title">
          Welcome and thank you for visiting
        </h1>
        <p className="home-p">
        <img src={nianImg} alt="picture" className="profilepic"/>
        <h4> Nian </h4>
        I am a Full-Stack Developer with experience in Express/NodeJs, React, Ruby on Rails and PostgresSQL. My journey as a web developer has taught me to embrace all challenges I face because they always end up to be great learning opportunities. I get excited when I see code I dont understand and I believe that the only constant is life and learning. I adapt well in a fast paced environment and I am exceptional with the organizational and time management skills needed when starting and completing a project.
        </p>
      </div>
    </div>
  );
};

export default About;
