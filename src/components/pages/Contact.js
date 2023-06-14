import React, { useState } from "react";

const Contact = () => {
  // Define state variables for the name, email, and message fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Define state variables to keep track of any validation errors
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Define a state variable to track whether the form has been submitted
  const [formSubmit, setFormSubmit] = useState(false);

  // Handle the form submission event
  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    // Check if the name field is empty, set an error if it is
    if (name === "") {
      setNameError(true);
      return;
    }

    // Use a regular expression to validate the email format, set an error if it's not valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    // Check if the message field is empty, set an error if it is
    if (message === "") {
      setMessageError(true);
      return;
    }

    // Set the formSubmit state variable to true to show a success message
    setFormSubmit(true);
  };

  return (
    <section id="contact">
      <p className="header">contact</p>
      <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className={`form-control ${nameError ? "is-invalid" : ""}`}
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <div className="invalid-feedback">Please enter your name</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className="invalid-feedback">
                    Please enter a valid email address
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className={`form-control ${messageError ? "is-invalid" : ""}`}
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {messageError && (
                  <div className="invalid-feedback">
                    Please enter a message:
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary mx-auto d-block">
                Submit
              </button>
            </form>

            {/* Show a success message if the form has been submitted */}
            {formSubmit && (
              <div className="alert alert-success mt-3" role="alert">
                Thank you for reaching out to me!
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
