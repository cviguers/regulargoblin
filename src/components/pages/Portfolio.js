import React from "react";
import Project from "../Project";
import placeholderImg from '../../images/placeholder.png'
import eaternationalImg from '../../images/eaternational.png';
import wingmanImg from '../../images/wingman.jpg';
import weatherdashboardImg from '../../images/weatherdashboard.png';
import techblogImg from '../../images/techblog.jpg';
import pokedexImg from '../../images/pokedex.jpg';
import logoImg from '../../images/logogen.jpg'


const Portfolio = () => {
  const projects = [
    {
      title: "Eaternational",
      description:
        "In this full stack application, a user can browse international snacks which are pulled from a MySQL / Sequelize database. In combination with Node.js and Express.js, we have created a RESTful API that allows users to make both GET and POST requests to sort through region specific products and then add those products to a form for follow up.",
      image: eaternationalImg,
      deployedLink: "https://eaternational.herokuapp.com/",
      githubLink: "https://github.com/cviguers/eaternational",
    },
	{
		title: "Wingman",
		description: "A MERN-stack single-page dating application, a user can create and maintain a profile that allows them to post life updates, browse other users and their posts, and much more. This is made possible through a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server with a React front end, implementing user authentication with JWT to build a user-focused platform.",
		image: wingmanImg,
		deployedLink: "https://wingman-dating.herokuapp.com/",
		githubLink: "",
	},
	{
		title: "Tech Blog",
		description: "This is a space where developers can publish their blog posts and comment on other developers posts as well. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
		image: techblogImg,
		deployedLink: "https://blogtownfrogtown.herokuapp.com/",
		githubLink: "https://github.com/cviguers/tech-mvc",
	},
	{
		title: "Weather Dashboard",
		description: "A weather dashboard that inputs a user searched city into OpenWeather's Geocoding API which fetches the coordinates of the user searched city and inputs those coordinates into OpenWeather's 5-Day Forecast API to create an application that allows the user to see the current and five day forecast.",
		image: weatherdashboardImg,
		deployedLink: "https://cviguers.github.io/weather-dashboard/",
		githubLink: "https://github.com/cviguers/weather-dashboard",
	},
	{
		title: "Pokedex",
		description: "This filing system acts as a Pokedex and pulls information from the PokeApi and the images from the GiphyApi to render cards on the screen displaying information about the user-searched Pokemon.",
		image: pokedexImg,
		deployedLink: "https://cviguers.github.io/pokedex/",
		githubLink: "https://github.com/cviguers/pokedex",
	},
	{
		title: "Logo Generator",
		description: "The command line application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file. Each aspect of the logo, including the color, shape, and text, has been tested using Jest.",
		image: logoImg,
		githubLink: "https://github.com/cviguers/svg-logo-generator",
	},
  ];

  return (
    // Returning a section containing a container element with some margin
    <section id="portfolio" className="container my-5">
      <div className="row">
        {" "}
        {/* Rendering a row of project components */}
        {/* Mapping over an array of 'projects' and rendering a 'Project' component for each */}
        {projects.map((project, index) => (
          <Project project={project} key={"project" + index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
