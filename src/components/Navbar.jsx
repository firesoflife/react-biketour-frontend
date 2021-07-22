import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
	return (
		<div>
			<nav>
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
					<NavLink className='navlink' activeClassName='active' to='/contest'>
						Contest
					</NavLink>
					<NavLink className='navlink' activeClassName='active' to='/about'>
						About
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
