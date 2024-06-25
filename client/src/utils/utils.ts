import axios, { AxiosResponse } from "axios";
import LoginResponse from "../models/loginResponse";

export async function handleLogin(username: string, password: string) {
    try {
        const response: AxiosResponse<LoginResponse> = await axios.post('http://localhost:3001/api/users/login', {
            username,
            password
        });

        const data: LoginResponse = response.data;

        if (data.success) {
            return data.message;
        } else {
            return data.message;
        }
    } catch (error) {
        console.error(error);
    }
}