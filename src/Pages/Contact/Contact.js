import React, { Component } from "react";
import SideBar from "../../components/SideBar";
import SkillSet from "../../components/SkillSet/SkillSet";

class Contact extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="bodyContent">
        <section className="mainContent">
          <h1>Contact</h1>
          <form
            id="form-email"
            action=""
            method="post"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" placeholder="Your Name" required />
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
            <br />
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" cols="30" rows="10" required />
            <br />
            <input id="submitButton" type="submit" value="Submit" />
          </form>
          
        </section>
        <SideBar />
        <SkillSet />
        <div className="push" />
      </div>
    );
  }
}

export default Contact;
