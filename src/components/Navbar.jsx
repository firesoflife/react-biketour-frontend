import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
	return (
		<nav>
			<div className='nav-container'>
				<div className='nav-left'>
					<NavLink to='/'>
						<h1>BCT</h1>
					</NavLink>
				</div>
				<div className='nav-right'>
					<div className='bars' onClick={toggle}>
						<FaAlignRight />
					</div>
					<div className='menu'>
						<NavLink className='navlink' activeClassName='active' to='/'>
							Home
						</NavLink>
						<NavLink className='navlink' activeClassName='active' to='/racers'>
							Profiles
						</NavLink>
						<NavLink className='navlink' activeClassName='active' to='/map'>
							Map
							<i className='faBars'></i>
						</NavLink>
						<NavLink className='navlink' activeClassName='active' to='/gallery'>
							Gallery
						</NavLink>
						<NavLink className='navlink' activeClassName='active' to='/contest'>
							Contest
						</NavLink>
						{/* <NavLink className='navlink' activeClassName='active' to='/about'>
							About
						</NavLink> */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
