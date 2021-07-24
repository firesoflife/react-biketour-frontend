import React from 'react';
import { IoBicycleOutline } from 'react-icons/io5';

const Profile = props => {
	return (
		<div className='profile-wrapper'>
			<div className='card'>
				<div className='profile'>
					<div className='icon-name'>
						<h3>{props.firstname}</h3>
						<ion-icon name='bicycle'>
							<IoBicycleOutline />
						</ion-icon>
					</div>

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
							<br />
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
