import React from 'react';
import GithubLogo from '../images/githubblack.svg';
import LinkedInLogo from '../images/linkedin.svg';

export default function Footer() {
	return (
		<footer className='absolute bottom-0 w-full p-5'>
			<div className='mx-auto w-fit flex space-x-2'>
				<a href='https://github.com/cviguers'>
					<img className='h-10' src={GithubLogo} alt='Github logo' />
				</a>
				<a href='https://www.linkedin.com/in/caroline-viguers/'>
					<img className='h-10' src={LinkedInLogo} alt='LinkedIn logo' />
				</a>
			</div>
		</footer>
	);
}