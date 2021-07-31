import React from 'react';

const Submission = props => {
	console.log(props);
	return (
		<div>
			<h2>A Submission from: {props.name} </h2>
			<h2>Email</h2>
			<p>{props.email}</p>
			<h2>Slogan:</h2>
			<p>{props.entry}</p>
		</div>
	);
};

export default Submission;
