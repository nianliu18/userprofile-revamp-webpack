import React from 'react';


const Projects = (props) => {
  return (
    <div className="mainproject-container">
      <div className="item-a">
        <h1> Inventory Manager </h1>
        <img className="inventory-photo" src={ require('../images/inventory-image.png')} alt="inventory" />
        <div className="item-a1">
          An inventory app allowing users to manage/track inventory expenses, visualize live inventory stock, as well as restock items and at the same time manage sales. This project was developed using backend PSQL, with CSS grid and React frontend.
        </div>
        <a href="https://github.com/WindCloud2018/inventory-manager"> Click to GitHub </a>
      </div>
      <div className="item-b">
        <h1> Pocket App </h1>
        <img className="pocket-icon" src={ require('../images/pocket-image.png')} alt="picture" />
        <div className="item-b1">
          What inspired me to to create this app was my passion for budgeting. I wanted to deepen my understanding in backend Express/NodeJs, PSQL databases and with React.js frontend. I also wanted create something that I would be able to use when I make expenses day to day. This app alllows users to add expenses base on category and date as well as render that organized information through a pie chart and bar chart.
        <a href="https://github.com/WindCloud2018/pocket"> Click to GitHub </a>
        </div>
      </div>
      <div className="item-c">
        <h1>Home Remedies Blog</h1>
         <img src="https://i.imgur.com/5JzAqNS.png" alt="picture" className="medicine-icon"/>
        <div className="item-c1">
            Home Remedies Blog was created due to my love for Eastern medicine and home remedies. My father is an herbalist and ever since I was a kid I would remember making arthritis pills and heart health medicine with my old man. This was also an opportunity for me to learn a new language. This app is built completely on Ruby on Rails and I also dove deeper into understanding the language by implementing Devise Authentication where users are able to sign in and post blogs on their experiences in home remedies and herbal medicine.
        </div>
        <a href="https://github.com/nianliu18/HomeRemediesBlog"> Click to GitHub </a>
      </div>
      <div className="item-d">
        <h1>Dice Poker Browser Game</h1>
        <img src="https://i.imgur.com/V06mCA9.png" alt="picture" className="dice-icon"/>
        <div className="item-d1">
          This was one of my first projects where I was still using JQuery and Vanilla Javascript to make websites and browser games. Dice Poker is a game I play when I am out with friends drinking. Just like poker, players roll their dice and whoever gets the highest poker combination wins. I had a lot of fun with this project because it was independent and it really got me thinking logically on the winning conditions of the game and the coding logic behind the interactions I wanted with the users.
        </div>
        <a href="http://dice-poker-nian.bitballoon.com/"> Click to Game </a>
        <a href="https://github.com/nianliu18/dice-poker">
          Click to GitHub </a>
      </div>
    </div>
  );
}

export default Projects;
