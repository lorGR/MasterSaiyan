import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.get('/',(req,res) => {
    res.send('Hello from server');
});

app.get('/api/data', (req, res) => {
    res.json({message: 'Hello from the API'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});