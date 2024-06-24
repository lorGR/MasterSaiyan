import axios from "axios";
import LoginResponse from "../models/loginResponse";

export async function handleLogin(username: string, password: string) {
    console.log("Form submitted");

    try {
        const response = await axios.post('http://localhost:3001/api/users/login', {
            username,
            password
        });

        const data : LoginResponse = response;

        if (data.success) {
            console.log('Login successfull');
        } else {
            console.dir(data);
        }
    } catch (error) {
        console.error(error);
    }



}