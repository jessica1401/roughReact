import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Home = (props) => {
    const {name} = useParams();
    console.log(name);
    const location = useLocation();
    console.log(location.pathname)
    return (<>
    <h1>Hello This is {props.val} Page</h1>
    </>);
}
 
export default Home;