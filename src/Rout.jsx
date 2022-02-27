import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Routes, Route } from 'react-router-dom';

const Rout = () => {
    return (<>
    <Routes>
        <Route exact path='/' element={<Home val="Home" />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/users/:name' element={<Home val="Users"></Home>}></Route>
        <Route path="*" element={<h1>No Found</h1>}></Route>
    </Routes>
    </>);
}
 
export default Rout;