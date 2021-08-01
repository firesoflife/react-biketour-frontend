import React, { Fragment } from 'react';

const Submission = props => {
	console.log(props);
	return (
		// <div>
		// 	<h2>A Submission from: {props.name} </h2>
		// 	<h2>Email</h2>
		// 	<p>{props.email}</p>
		// 	<h2>Slogan:</h2>
		// 	<p>{props.entry}</p>
		// </div>
		<Fragment>
			<div className='submission-inner'>
				<div className='submission-name'>
					<h3>{props.name}</h3>
				</div>
				<div className='submission-slogan'>
					<h3>{props.entry}</h3>
				</div>
			</div>
		</Fragment>
	);
};

export default Submission;
