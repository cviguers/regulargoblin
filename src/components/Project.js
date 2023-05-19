import React from 'react'; // Importing the React library

function Project({ project }) { // Defining a functional component that takes in a 'project' object as a prop

  const { title, image, githubLink, deployedLink } = project;   // Destructuring the 'project' object to extract its properties

  return (   // Rendering the 'Project' component with the extracted properties
    <div key={title} className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img src={image} height={250} width={250} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>

        <div>      {/* Rendering a link to the GitHub repository */}
          <a href={githubLink}>
            GitHub Repository
          </a>
        </div>

        <div>
          <a href={deployedLink}>  {/* Rendering a link to the deployed project */}
            Deployed Website
          </a>
        </div>
      </div>
    </div>
  );
}

// Exporting the 'Project' component as the default export of this module
export default Project;