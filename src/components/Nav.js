import React from "react";
import '../styles/style.css'

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="navbox">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            //  TODO: Add a comment explaining what this logic is doing

            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing

            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
