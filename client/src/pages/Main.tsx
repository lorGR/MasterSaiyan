import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';

const Main:React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <a href="/login">login</a>
            <a href="/register">register</a>
            <a href="/home">home</a> */}
            <Outlet />
        </div>
    )
}

export default Main;