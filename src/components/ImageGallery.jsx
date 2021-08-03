import React from 'react';

const PhotoComp = ({ photo }) => {
	const { user, urls } = photo;

	return (
		<div className='image-gallery-container'>
			<img className='gallery-images' src={urls.regular} alt='bike-race' />
			<a
				className='credit'
				target='_blank'
				rel='noreferrer'
				href={`https://unsplash.com/@${user.username}`}
			>
				Photo Credit: {user.name}
			</a>
		</div>
	);
};

export default PhotoComp;
