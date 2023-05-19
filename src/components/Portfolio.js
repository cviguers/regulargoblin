import React from 'react';
import Project from './Project';
// import eaternationalImg from '../images/eaternational.png';


const projects = [
	{
		title: 'Eaternational',
		description: 'A full stack application using RESTful API, Handlebars.js, MySQL and Sequelize. This app allows users browse international food products.',
		// image: eaternationalImg,
		deployedLink: 'https://app.herokuapp.com',
		githubLink: 'https://github.com/cviguers/eaternational',
	}
];

export default function Portfolio() {
	return (
		<div className='container mx-auto mt-8 p-4'>
			<h2 className='text-lg md:text-2xl text-slate-800'>Portfolio</h2>
			<div className='flex flex-wrap mt-2 md:mt-6'>
				{projects.map((project, idx) => (
					<Project key={idx} {...project} />
				))}
			</div>
		</div>
	);
}