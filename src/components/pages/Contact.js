import React from "react";
import "../../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <div class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="row align-items-center">
                <div class="col-lg-7 mb-5 mb-lg-0">
                  <h2 class="mb-5">get in touch.</h2>

                  <form
                    class="border-right pr-5 mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="fname"
                          id="fname"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col-md-6 form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="lname"
                          id="lname"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <input
                          type="submit"
                          value="Send Message"
                          class="btn btn-primary rounded-0 py-2 px-4"
                        />
                        <span class="submitting"></span>
                      </div>
                    </div>
                  </form>

                  <div id="form-message-warning mt-4"></div>
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </div>
                <div class="col-lg-4 ml-auto">
                  <h3 class="mb-4">or just look</h3>
                  <p>
                    <a href="https://github.com/cviguers">github</a>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/m/in/caroline-viguers-1568531ba">linkedin</a>
                  </p>
                  <p>
                    <a href="https://docs.google.com/document/d/1-zZ9HNyDTsuy7_O8axdubrVahlqlZSpOTTzlp1FTk0M/edit?usp=sharing">resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.validate.min.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
}
