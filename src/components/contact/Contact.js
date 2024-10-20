import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let's talk about everything!</h3>
          <p className="contact-details">Don't like forms? Send me an email.</p>
        </div>
        <form action="" className="contact-form">
          <div className="contact-form_group">
            <div className="contact-form_div">
              <input
                type="text"
                className="contact-form_input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact-form_div">
              <input
                type="email"
                className="contact-form_input"
                placeholder="Insert your email"
              />
            </div>
          </div>
          <div className="contact-form_div">
            <input
              type="text"
              className="contact-form_input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact-form_div">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact-form_input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
