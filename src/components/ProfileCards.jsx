import React from 'react';
import { IoBicycleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProfileCards = props => {
	console.log();
	return (
		<div className='card-body'>
			<div className='card-title'>
				{props.firstname} {props.lastname}
			</div>
			<div className='profile-container'>
				<div className='icon'>
					<IoBicycleOutline />
					<p>
						Profile Img <br /> Placeholder
					</p>
				</div>
			</div>

			<div className='features'>
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

			<Link to={`/racers/profile/${props.id}`} className='btn'>
				See <span className='btn-link'> {props.firstname}'s' </span>Full Profile
			</Link>
		</div>
	);
};

export default ProfileCards;
