import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav>
			<div className='nav-container'>
				<NavLink to='/'>
					<h1>Logo</h1>
				</NavLink>
				<div className='bars'>
					<FaAlignRight />
				</div>
				<div className='menu'>
					<NavLink className='navlink' activeClassName='active' to='/map'>
						Map
						<i className='faBars'></i>
					</NavLink>
					<NavLink className='navlink' activeClassName='active' to='/gallery'>
						Gallery
					</NavLink>
					<NavLink className='navlink' activeClassName='active' to='/racers'>
						Racer Profiles
					</NavLink>
					<NavLink className='navlink' activeClassName='active' to='/contest'>
						Contest
					</NavLink>
					<NavLink className='navlink' activeClassName='active' to='/about'>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
