import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return(
        <nav>
            <Link to="/home">Home</Link>
            <a href="">Train</a>
        </nav>
    )
}

export default Navbar