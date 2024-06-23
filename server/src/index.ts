import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());

const connection = mysql.createConnection({
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

app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API' });
});

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM test';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).send(error.message);
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});