import React from 'react'; // Importing React library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome Icons
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importing specific icons used below

const Footer = () => { 
  return (
    <footer className="bg-black text-white py-3 footer"> {/* Rendering the footer */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="footerText">&copy; Made by: Christopher Snyder</p>
            <div className="social-icons">  {/* Rendering a FontAwesomeIcon with the GitHub, LinkedIn or Facebook icon */}
              <a href="https://github.com/csnyder94"> 
                <FontAwesomeIcon icon={faGithub} style={{fontSize: '34px'}}/> 
              </a>
              <a href="https://www.linkedin.com/in/christopher-snyder-a6000a246/"> 
                <FontAwesomeIcon icon={faLinkedin} style={{fontSize: '34px'}} className="px-3"/> 
              </a>
              <a href="https://www.facebook.com/chris.snyder.792"> 
                <FontAwesomeIcon icon={faFacebook} style={{fontSize: '34px'}} /> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the 'Footer' component as the default export