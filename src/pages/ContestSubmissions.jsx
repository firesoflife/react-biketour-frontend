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
				console.log(submission.id);
			})
			.catch(resp => console.log(resp));
	}, []);

	const grid = submission.map(entry => {
		return (
			<Submission
				key={entry.id}
				id={entry.id}
				name={entry.name}
				email={entry.email}
				slogan={entry.entry}
			/>
		);
	});

	return (
		// <div>
		// 	<h1>Look at all the damn Submissions! </h1>
		// 	<h2>Name: {submission.name}</h2>
		// </div>
		<Fragment>
			<div className='header'>
				<h1>Choose your Racer!</h1>
				<div className='subheader'>
					Track the location of your favourite racer and get their bios!
				</div>
				<div className='card-page'>
					<div className='grid'>{grid}</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ContestSubmissions;