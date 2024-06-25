import express from 'express'
import { RowDataPacket } from 'mysql2';
import { connection } from "../../index";
import LoginResponse from '../../../../client/src/models/loginResponse';

export async function loginUser(req: express.Request, res: express.Response) {
    const {username, password} = req.body;

    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    connection.query(query, [username,password], (error, results : RowDataPacket[] ) => {
        if(error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
            return
        }

        if(results.length  > 0) {
            const successResponse: LoginResponse = { success: true, message: 'Login Successfully'};
            res.send(successResponse)
        } else {
            const invalidResponse: LoginResponse = { success: false, message: 'Invalid Credentials'};
            res.send(invalidResponse)
        }
    })
}