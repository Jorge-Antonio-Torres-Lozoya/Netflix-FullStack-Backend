import server from "./server.js"
import { connect } from "./database.js";
import dotenv from 'dotenv';
// import cors from 'cors';
dotenv.config();
connect();

// Habilitar CORS
// server.use( cors() );
server.start( { port: 3000}, ( { port } ) => {
    console.log('Sever is running on ' + port )
})