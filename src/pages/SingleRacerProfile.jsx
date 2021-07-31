import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoBicycleOutline, IoStar } from 'react-icons/io5';

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
			})
			.catch(resp => console.log(resp));
	}, []);
	return (
		<Fragment>
			<div className='racer'>
				<div className='racer__container'>
					<h2>
						<span>Meet:</span> {racer.f_name} {racer.l_name}
					</h2>
					<div className='profile__container'>
						<div className='racer__icon'>
							<IoBicycleOutline />
							<p>
								Profile Img <br /> Placeholder
							</p>
						</div>
					</div>
					<h3 className='rank__title'>Racer Popularity</h3>
					<div className='rank'>
						<div className='star'>
							<IoStar />
						</div>
						<div className='star'>
							<IoStar />
						</div>
						<div className='star'>
							<IoStar />
						</div>
						<div className='star'>
							<IoStar />
						</div>
						<div className='star'>
							<IoStar />
						</div>
					</div>
					<div className='bio'>
						<div className='bio-titles'>
							<h3>
								<span>Home Town:</span> <br />
								{racer.city}{' '}
							</h3>
							<h3>
								<span> Home State:</span> <br />
								{racer.state}{' '}
							</h3>
						</div>
						<div className='bio-snippet'>
							<h3>
								{' '}
								<span> Profile: </span>
							</h3>
							<p className='desc'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Maiores sequi laboriosam minus beatae voluptates, voluptate
								nobis vitae? Quam, vero at.
							</p>
						</div>
					</div>
					<Link to={'/map'} className='map-btn'>
						Find {racer.f_name} On The Map
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default SingleRacerProfile;
