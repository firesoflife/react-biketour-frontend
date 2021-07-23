import React from 'react';
import { useLocation } from 'react-router';
import Profile from '../components/Profile';

const SingleRacerProfile = () => {
	const { state } = useLocation();
	return (
		<div>
			<Profile
				key={state.id}
				firstname={state.f_name}
				lastname={state.l_name}
				city={state.city}
				state={state.state}
			/>
		</div>
	);
};

export default SingleRacerProfile;
