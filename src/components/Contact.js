import React, { useState } from 'react';

export default function Contact() {
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });

	const handleFormChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	return (
		<div className='container mx-auto mt-8 p-4'>
			<h2 className='text-lg md:text-2xl text-slate-800'>Contact me</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setFormState({ name: '', email: '', message: '' });
				}}
			>
				<label className='block text-slate-800 mt-4' htmlFor='name'>
					Name
				</label>
				<input
					className='block w-full max-w-lg border border-slate-800 rounded-md p-2'
					type='text'
					name='name'
					id='name'
					required
					value={formState.name}
					onChange={handleFormChange}
				/>
				<label className='block text-slate-800 mt-4' htmlFor='email'>
					Email
				</label>
				<input
					className='block w-full max-w-lg border border-slate-800 rounded-md p-2'
					type='email'
					name='email'
					id='email'
					required
					value={formState.email}
					onChange={handleFormChange}
				/>
				<label className='block text-slate-800 mt-4' htmlFor='message'>
					Message
				</label>
				<textarea
					className='block w-full max-w-lg border border-slate-800 rounded-md p-2'
					name='message'
					id='message'
					rows='5'
					required
					value={formState.message}
					onChange={handleFormChange}
				/>
				<button className='block bg-cyan-700 hover:bg-cyan-800 text-white rounded-md p-2 mt-4' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}