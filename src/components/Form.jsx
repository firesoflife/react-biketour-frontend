import React from 'react';
import useForm from './useForm';
import validate from './validtateInfo';

const Form = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useForm(
		submitForm,
		validate
	);

	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<h1>Submit Your Entry </h1>
				<div className='form-inputs'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						className='form-input'
						type='text'
						name='username'
						placeholder='Enter your username'
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>
				<div className='form-inputs'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						className='form-input'
						type='email'
						name='email'
						placeholder='Enter your email'
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<label htmlFor='textarea' className='form-label'>
					Send in your Slogan!
				</label>
				<br />
				<textarea
					className='form-textarea'
					id='slogan-text'
					name='entry'
					placeholder='Enter your slogan and hit "submit"'
					value={values.entry}
					onChange={handleChange}
				></textarea>
				{errors.entry && <p className='form-error'>{errors.entry}</p>}

				<button className='form-input-btn btn'>Submit</button>
				<p className='email-remind'>
					Make sure you use an email address you monitor so we can get in touch
					if you win.
				</p>
			</form>
		</div>
	);
};

export default Form;
