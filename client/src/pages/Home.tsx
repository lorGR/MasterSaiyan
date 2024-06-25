import React from "react"
import Button from "../components/button/Button";

const Home: React.FC = () => {
    return(
        <div>
            <Button textLabel="Login" link="login"></Button>
            <Button textLabel="Register" link="register"></Button>
        </div>
    )
}

export default Home;