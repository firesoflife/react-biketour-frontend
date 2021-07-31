import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
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
				<div className='submissions'>
					<Link to='/submissions'>
						<Button tye='button' buttonStyle='btn__primary--outline'>
							See Entries
						</Button>
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default ContestForm;
