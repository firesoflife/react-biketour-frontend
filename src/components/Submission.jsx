import React from 'react';

const Submission = props => {
	console.log(props.name);
	return (
		<div>
			<h1>A Submission from: {props.name} </h1>
		</div>
	);
};

export default Submission;
