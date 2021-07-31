import React from 'react';
import Button from './Button';

const FormSuccessAlert = () => {
	return (
		<div className='form-container'>
			<div className='success-box'>
				<div className='form-success'>
					Thanks For Your Submission! Keep an eye on your email for contest
					announcements{' '}
				</div>
				<Button>See Other Entries</Button>
			</div>
		</div>
	);
};

export default FormSuccessAlert;
