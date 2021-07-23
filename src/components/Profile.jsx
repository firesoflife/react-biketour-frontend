import React from 'react';

const Profile = props => {
	return (
		<div className='profile-wrapper'>
			<h2 className='racer-bio'>
				{props.firstname} {props.lastname}{' '}
			</h2>
			<div className='card'>
				<div className='profile'>
					<ion-icon name='bicycle'></ion-icon>
					<div className='info-box'>
						<h3 className='info-title'>Racer Info</h3>
						<div className='line-break'></div>
						<div className='racer-city'>
							<span className='lead'>Home Town: </span>
							<br></br>
							{props.city}{' '}
						</div>
						<div className='racer-state'>
							<span className='lead'>Home State: </span>
							{props.state}{' '}
						</div>
					</div>
				</div>
				<div className='racer-location'>Find {props.firstname} on the Map!</div>
			</div>
		</div>
	);
};

export default Profile;
