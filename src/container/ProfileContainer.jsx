import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../components/Input.jsx";


class ProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "Bananas"
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }


  render() {
    const { seo_title } = this.state;
    return (
      <div>
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
      <div className='loadbar'>
        <div className='myBar'>
        <p>...loading</p>
        </div>
      </div>
      </div>
    );
  }
}

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<ProfileContainer />, wrapper) : false;

export default ProfileContainer;
