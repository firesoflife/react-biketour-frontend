import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Profile from '../components/Profile';

const RacerProfiles = () => {
	const [racers, setRacers] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:4000/racers')
			.then(resp => {
				setRacers(resp.data);
				console.log(resp.data);
			})
			.catch(resp => console.log(resp));
	}, []);

	const grid = racers.map(racer => {
		return (
			<Profile
				key={racer.id}
				firstname={racer.f_name}
				lastname={racer.l_name}
				city={racer.city}
				state={racer.state}
			/>
		);
	});

	return (
		<Fragment>
			<div className='header'>
				<h1>Choose your Racer!</h1>
				<div className='subheader'>
					Track the location of your favourite racer and get their bios!
				</div>
				<div className='grid'>{grid}</div>
			</div>
		</Fragment>
	);
};

export default RacerProfiles;
