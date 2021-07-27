import React, { Fragment } from 'react';

const PhotoComp = ({ photo }) => {
	const { user, urls } = photo;

	return (
		<div className='image-gallery-container'>
			<img className='gallery-images' src={urls.regular} />
			<a
				className='credit'
				target='_blank'
				href={`https://unsplash.com/@${user.username}`}
			>
				{user.name}
			</a>
		</div>
	);
};

export default PhotoComp;
