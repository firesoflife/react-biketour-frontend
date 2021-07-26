import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleRacerProfile = props => {
	const [racer, setRacer] = useState({
		id: '',
		f_name: '',
		l_name: '',
		city: '',
		state: '',
	});

	useEffect(() => {
		const id = props.match.params.id;
		const url = `http://localhost:4000/racers/${id}`;

		axios
			.get(url)
			.then(resp => {
				setRacer(resp.data);
				// console.log(resp.data);
			})
			.catch(resp => console.log(resp));
	}, []);
	return (
		<div className='profile-body'>
			<div className='profile-container'>
				<p className='text-test'>
					{' '}
					this is {racer.f_name} {racer.l_name}
				</p>
				<p className='text-test'>
					She Lives in {racer.city}, {racer.state}
				</p>
			</div>
		</div>
	);
};

export default SingleRacerProfile;
