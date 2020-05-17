import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = ({ ipAddressData, google }) => {
    const { latitude, longitude } = ipAddressData;
    const displayMarkers = () => {
        return (
            <Marker
                id={1}
                position={{
                    lat: latitude,
                    lng: longitude
                }}
                onClick={() => {}}
            />
        );
    };
    return (
        <div id="map-canvas">
            <Map
                style={{
                    top: 0,
                    left: 0,
                    display: 'block',
                    width: '100%',
                    height: '94.2%',
                    position: 'absolute'
                }}
                google={google}
                zoom={12}
                initialCenter={{
                    lat: latitude,
                    lng: longitude
                }}
            >
                {displayMarkers()}
            </Map>
        </div>
    );
};

const GoogleMapsWrapper = GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY,
    language: 'fin'
})(GoogleMap);

export default GoogleMapsWrapper;
