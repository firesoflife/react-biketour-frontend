import React, { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import { createApi } from 'unsplash-js';

const api = createApi({
	// Don't forget to set your access token here!
	// See https://unsplash.com/developers
	accessKey: 'SJoYwh9wRf56F4ikb9bYYtCNHDrxtg8pKP57HXgtY64',
});

const Body = () => {
	const [data, setPhotosResponse] = useState(null);

	useEffect(() => {
		api.search
			.getPhotos({
				perPage: 20,
				query: 'bike race',
				orientation: 'landscape',
			})
			.then(result => {
				setPhotosResponse(result);
				console.log(api.topics.list);
			})
			.catch(() => {
				console.log('something went wrong!');
			});
	}, []);

	if (data === null) {
		return <div>Loading...</div>;
	} else if (data.errors) {
		return (
			<div>
				<div>{data.errors[0]}</div>
				<div>PS: Make sure to set your access token!</div>
			</div>
		);
	} else {
		return (
			<div className='feed'>
				<ul className='columnUl'>
					{data.response.results.map(photo => (
						<li key={photo.id} className='li'>
							<ImageGallery photo={photo} />
						</li>
					))}
				</ul>
			</div>
		);
	}
};

export default Body;
