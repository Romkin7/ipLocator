import React from 'react';

const List = ({ ipAddressData }) => {
    const {
        city,
        country_code,
        country_name,
        ip,
        metro_code,
        region_code,
        region_name,
        time_zone,
        zip_code,
        latitude,
        longitude
    } = ipAddressData;
    return (
        <ul>
            <li>ip: {ip}</li>
            <li>city: {city}</li>
            <li>country code: {country_code}</li>
            <li>country name: {country_name}</li>
            <li>region code: {region_code}</li>
            <li>region name: {region_name}</li>
            <li>latitude: {latitude}</li>
            <li>longitude: {longitude}</li>
            <li>zip code: {zip_code}</li>
            <li>time zone: {time_zone}</li>
            <li>metro code: {metro_code}</li>
        </ul>
    );
};

export default List;
