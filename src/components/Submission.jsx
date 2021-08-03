import React, { Fragment } from 'react';

const Submission = props => {
	console.log(props);
	return (
		<Fragment>
			<div className='slogan-container'>
				<div className='slogan-wrapper'>
					<div className='slogan-left'>
						<h3>Sumbmission from:</h3>
						<h3 className='entry-name'>{props.name}</h3>
					</div>
					<div className='slogan-right'>
						<h4 className='entry-name'>" {props.entry} "</h4>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Submission;
