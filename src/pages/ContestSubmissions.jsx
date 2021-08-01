import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Submission from '../components/Submission';

const ContestSubmissions = () => {
	const [submission, setSubmission] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:4000/slogans')
			.then(resp => {
				setSubmission(resp.data);
				console.log(submission);
			})
			.catch(resp => console.log(resp));
	}, [submission.length]);

	const contestEntry = submission.map(entry => {
		return (
			<Submission
				key={entry.id}
				id={entry.id}
				name={entry.name}
				email={entry.email}
				entry={entry.entry}
			/>
		);
	});

	return (
		<Fragment>
			<div className='header'>
				<h1>Contest Submissions</h1>
				<div className='subheader'>
					Check out the latest submissions! What slogan do you think we should
					have?!
				</div>
				<div className='slogan-container'>
					<div className='slogan-grid'>{contestEntry}</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ContestSubmissions;
