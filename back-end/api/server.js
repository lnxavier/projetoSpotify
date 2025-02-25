import express from 'express';
import path from 'path';
import { db } from './connect.js';


const app = express();
const PORT =  process.env.PORT || 3000;

const __dirname = path.resolve();

app.get('/api/', (request, response) => {
    response.send('endpoints: "/artists" "/songs"');
})

app.get('/api/artists', async (request, response) => {
    try {
        const artists = await db.collection('artists').find({}).toArray();
        response.json(artists);
    } catch (error) {
        response.status(500).json({ error: 'Erro ao buscar artistas' });
    }
});

app.get('/api/songs', async (request, response) => {
    try {
        const songs = await db.collection('songs').find({}).toArray();
        response.json(songs);
    } catch (error) {
        response.status(500).json({ error: 'Erro ao buscar músicas' });
    }
});

app.use(express.static(path.join(__dirname, '../front-end/dist')))

app.get('*', async(request, response) => {
    response.sendFile(path.join(__dirname, '../front-end/dist/index.html'));
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta: ${PORT}`);
})