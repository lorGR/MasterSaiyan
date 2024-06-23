import express from 'express';
import cors from 'cors';
import mysql, { RowDataPacket } from 'mysql2';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

import userRouter from './API/users/userRoutes';
app.use('/api/users', userRouter);

// app.post('/api/login', (req, res) => {
//     const {username, password} = req.body;

//     const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
//     connection.query(query, [username,password], (error, results : RowDataPacket[] ) => {
//         if(error) {
//             console.error('Error fetching data:', error);
//             res.status(500).send('Error fetching data');
//             return
//         }

//         if(results.length  > 0) {
//             res.json({ success: true })
//         } else {
//             res.json({ success: false, message: 'Invalid credentials'})
//         }
//     })
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});