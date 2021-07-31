import React from 'react';

const STYLES = [
	'btn__primary--solid',
	'btn__warning--solid',
	'btn__danger-solid',
	'btn__success--solid',

	'btn__primary--outline',
	'btn__warning--outline',
	'btn__danger-outline',
	'btn__success--outline',
];

const SIZES = ['btn-medium', 'btn-small'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<div>
			<button
				className={`main-btn ${checkButtonStyle} ${checkButtonSize}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
