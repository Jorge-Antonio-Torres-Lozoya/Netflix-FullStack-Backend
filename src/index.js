import server from "./server.js"
import { connect } from "./database.js";
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
connect();

// Habilitar CORS
const corsOptions = {
    origin: 'http://localhost:5173', // Cambia esto con tu URL de origen permitido
    credentials: true, // Si necesitas permitir el envío de cookies o encabezados de autorización
  };
  server.express.use(cors(corsOptions));
server.start( { port: 3000}, ( { port } ) => {
    console.log('Sever is running on ' + port )
})