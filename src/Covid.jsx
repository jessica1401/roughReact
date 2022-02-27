import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";

const Covid = () => {
    const [api, setApi] = useState({});

    const getCovidData = async () => {
        try {

            const data = await axios.get('https://data.covid19india.org/data.json');
            console.log(data.data);

            // const res = await fetch('https://data.covid19india.org/data.json');
            // const data = await res.json();
            // console.log(data.statewise[0]);
            // setApi(data.statewise[0]);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (<>
    <h1>🔴 LIVE</h1>
    <h2>COVID - 19 TRACKER</h2>
    <p>{api.active}</p>
    </>);
}
 
export default Covid;