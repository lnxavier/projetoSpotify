import cors from 'cors';
import express from 'express';
import { db } from './connect.js';


const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (request, response) => {
    response.send('endpoints: "/artists" "/songs"');
})

app.get('/artists', async(request, response) => {
    response.send(await db.collection('artists').find({}).toArray());
})

app.get('/songs', async(request, response) => {
    response.send(await db.collection('songs').find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta: ${PORT}`);
})