import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IoBicycleOutline } from 'react-icons/io5';
import axios from 'axios';

const RaceMap = (props) => {
  const [position, setPosition] = useState([]);

  useEffect(() => {
    axios
      // .get('http://localhost:4000/racers')
      .get('https://peaceful-atoll-77526.herokuapp.com/racers')
      .then((resp) => {
        setPosition(resp.data);
        // console.log(resp.data);
      })
      .catch((resp) => console.log(resp));
  }, [position.length]);

  const marker = position.map((racerPosition) => {
    return (
      <Fragment>
        <Marker
          key={racerPosition.id}
          position={[racerPosition.lat, racerPosition.lng]}
        >
          <Popup>
            <div className='popup__container'>
              <div className='popup__profile--img'>
                <div className='profile-container'>
                  <div className='popup-icon'>
                    <IoBicycleOutline />
                    <p>
                      Img <br /> Placeholder
                    </p>
                  </div>
                </div>
              </div>
              <div className='popup__details'>
                <h3>
                  {racerPosition.f_name} {racerPosition.l_name}
                </h3>
                <Link
                  to={`/racers/profile/${racerPosition.id}`}
                  className='btn'
                >
                  See{' '}
                  <span className='btn-link'> {racerPosition.f_name}'s' </span>
                  Full Profile
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>
      </Fragment>
    );
  });

  return (
    <div className='map-container'>
      <h1 className='title'>Track Your Favourite Riders</h1>
      <MapContainer
        center={[40.0149856, -105.2705456]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        {marker}
      </MapContainer>
    </div>
  );
};

export default RaceMap;
