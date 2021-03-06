import React, { Fragment } from 'react';
import CountDown from '../components/CountDown';
import ContestForm from './ContestForm';

const Home = () => {
	return (
		<Fragment>
			<div className='section-body' id='home'>
				<div className='background'>
					<div className='title-background'></div>
					<div className='title-content'>
						<h1 className='main-title'>
							Boulder
							<span className='cross-text'> Cyclocross </span> Championhsip
						</h1>
						<h2 className='sub-title'>
							The Biggest Cycling Event of the Year!
						</h2>
					</div>
					<div className='down-arrow'>
						<i className='fas fa-arrow-down'></i>
					</div>
				</div>
			</div>
			<CountDown />
			<ContestForm />
		</Fragment>
	);
};

export default Home;
