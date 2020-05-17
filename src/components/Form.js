import React, { useState } from 'react';
import { Button, Input, Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import axios from 'axios';

const Form = ({ setIpAddressData }) => {
    const [ipValue, setIpValue] = useState();
    const onSubmitHandler = event => {
        event.preventDefault();
        async function fetchIpAddressData() {
            await axios
                .get('https://freegeoip.app/json/' + ipValue)
                .then(response => {
                    setIpAddressData(response.data);
                })
                .then(error => {
                    console.error(error);
                });
        }
        fetchIpAddressData();
    };
    const changeHandler = event => {
        setIpValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <Grid container={true}>
                <Grid item={true} xs={12}>
                    <Input
                        fullWidth={true}
                        type="text"
                        variant="outlined"
                        color="primary"
                        id="ip"
                        name="ip"
                        required={true}
                        value={ipValue}
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item={true} xs={12}>
                    <Button variant="outlined" color="primary" type="submit">
                        <Search />
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
