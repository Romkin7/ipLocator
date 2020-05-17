import React, { useState } from 'react';
import Form from './components/Form';
import { Typography } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import GoogleMapsWrapper from './components/Map';
import './App.css';

const App = () => {
    const [ipAddressData, setIpAddressData] = useState();
    return (
        <div className="App">
            <main className="App-header">
                <Typography variant="h3" color="primary">
                    <LocationOn /> Ip Address Locator
                </Typography>
                <Form setIpAddressData={setIpAddressData} />
            </main>
            {!ipAddressData && <GoogleMapsWrapper ipAddressData={{ latitude: 60.16952, longitude: 24.93545 }} />}
            {!!ipAddressData && <GoogleMapsWrapper ipAddressData={ipAddressData} />}
        </div>
    );
};

export default App;
