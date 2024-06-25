import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Button from '../components/button/Button';

const Main:React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    )
}

export default Main;