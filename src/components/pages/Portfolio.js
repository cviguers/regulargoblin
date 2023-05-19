import React from "react";
import Project from "../Project";
import eaternationalImg from '../../images/eaternational.png';
import wingmanImg from '../../images/wingman.jpg';
import placeholderImg from '../../images/placeholder.png'


const Portfolio = () => {
  const projects = [
    {
      title: "Eaternational",
      description:
        "A full stack application using RESTful API, Handlebars.js, MySQL and Sequelize. This app allows users browse international food products.",
      image: eaternationalImg,
      deployedLink: "https://eaternational.herokuapp.com/",
      githubLink: "https://github.com/cviguers/eaternational",
    },
	{
		title: "Wingman",
		description: "A MERN-stack single-page dating application, a user can create and maintain a profile that allows them to post life updates, browse other users and their posts, and much more. This is made possible through a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server with a React front end, implementing user authentication with JWT to build a user-focused platform.",
		image: wingmanImg,
		deployedLink: "input link here",
		githubLink: "",
	},
	{
		title: "",
		description: "",
		image: placeholderImg,
		deployedLink: "",
		githubLink: "",
	},
	{
		title: "",
		description: "",
		image: placeholderImg,
		deployedLink: "",
		githubLink: "",
	},
	{
		title: "",
		description: "",
		image: placeholderImg,
		deployedLink: "",
		githubLink: "",
	},
	{
		title: "",
		description: "",
		image: placeholderImg,
		deployedLink: "",
		githubLink: "",
	},
  ];

  return (
    // Returning a section containing a container element with some margin
    <section className="container my-5">
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
