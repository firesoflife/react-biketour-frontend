import React from 'react';
import styled from 'styled-components';
import { Link as Links } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const MobileNav = ({ isOpen, toggle }) => {
	const nodeRef = React.useRef(null);
	return (
		<div className='global'>
			<MobileMenuContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle} ref={nodeRef}>
					<CloseIcon />
				</Icon>
				<MobileMenuWrapper>
					<MobileMenu>
						<Link to='/' onClick={toggle}>
							Home
						</Link>
						<Link to='/racers' onClick={toggle}>
							Profiles
						</Link>
						<Link to='map' onClick={toggle}>
							Map
						</Link>
						<Link to='gallery' onClick={toggle}>
							Gallery
						</Link>
						<Link to='contest' onClick={toggle}>
							Contest
						</Link>
					</MobileMenu>
				</MobileMenuWrapper>
			</MobileMenuContainer>
		</div>
	);
};

export const MobileMenuContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: #1f2124;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3 ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const MobileMenuWrapper = styled.div`
	color: #fff;
`;

export const MobileMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 8rem);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 6rem);
	}
`;

export const Link = styled(Links)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 4vw;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;

	&:hover {
		color: #f6b352;
		transition: 0.2s ease-in-out;
	}
`;

export default MobileNav;
