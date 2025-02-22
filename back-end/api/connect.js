import { MongoClient } from 'mongodb';


const URI = "mongodb+srv://projetoSpotify:K2wfdIhw6P0crFbt@cluster0.fj65z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db('projetoSpotify');
