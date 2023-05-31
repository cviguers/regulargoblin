import React from 'react'; // Importing React library
import '../styles/footer.css'; // Importing the stylesheets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome Icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importing specific icons used below

const Footer = () => { 
  return (
    <footer className="py-3 footer"> {/* Rendering the footer */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="footerText">&copy; Made with ❤ by: caro vigies</p>
            <div className="social-icons">  {/* Rendering a FontAwesomeIcon with the GitHub or LinkedIn icon */}
              <a href="https://github.com/cviguers"> 
                <FontAwesomeIcon icon={faGithub} className='icon' style={{fontSize: '34px'}}/> 
              </a>
              <a href="https://www.linkedin.com/in/caroline-viguers-1568531ba/"> 
                <FontAwesomeIcon icon={faLinkedin} style={{fontSize: '34px'}} className="px-3 icon"/> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the 'Footer' component as the default export