import React, { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import { createApi } from 'unsplash-js';

const api = createApi({
	accessKey: 'SJoYwh9wRf56F4ikb9bYYtCNHDrxtg8pKP57HXgtY64',
});

const Body = () => {
	const [data, setPhotosResponse] = useState(null);

	useEffect(() => {
		api.search
			.getPhotos({
				pages: 2,
				perPage: 20,
				query: 'bike race',
				orientation: 'landscape',
			})
			.then(result => {
				setPhotosResponse(result);
				console.log(result);
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
			<div className='photopage-container'>
				<div className='photo-grid'>
					{data.response.results.map(photo => (
						<div key={photo.id} className='images'>
							<ImageGallery photo={photo} />
						</div>
					))}
				</div>
			</div>
		);
	}
};

export default Body;
