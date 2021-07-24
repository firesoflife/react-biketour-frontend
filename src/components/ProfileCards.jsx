import React from 'react';
import { IoBicycleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProfileCards = props => {
	return (
		<div className='card-body'>
			<div className='card-title'>
				{props.firstname} {props.lastname}
			</div>
			<div className='profile-container'>
				<div class='icon'>
					<IoBicycleOutline />
					<p>
						Profile Img <br /> Placeholder
					</p>
				</div>
			</div>

			<div class='features'>
				<ul>
					<li>
						<span>City:</span> {props.city}
					</li>
					<li>
						<span>State:</span> {props.state}
					</li>
					<li>Find out where this cycylist is by checking the map!</li>
				</ul>
			</div>

			<Link to={`/profile/racers/`} class='btn'>
				Find <span className='btn-link'> {props.firstname} </span>on the Map
			</Link>
		</div>
	);
};

export default ProfileCards;
