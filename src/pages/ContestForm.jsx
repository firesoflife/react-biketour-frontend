import React, { Fragment, useState } from 'react';
import Form from '../components/Form';
import FormSuccessAlert from '../components/FormSuccessAlert';

const ContestForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}

	return (
		<Fragment>
			<div id='contest' className='form-container'>
				<h1>Enter the Contest to Win!</h1>
				<h3>
					We are holding a contest for our next slogan! Enter today for a chance
					to win an all accomodations paid trip to next years race!{' '}
				</h3>
				<div className='form-box'>
					{!isSubmitted ? (
						<Form submitForm={submitForm} />
					) : (
						<FormSuccessAlert />
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default ContestForm;
