// import server from "./server.js"
 import { connect } from "./database.js";
import dotenv from 'dotenv';
// // import cors from 'cors';

// server.start( { port: 3000}, ( { port } ) => {
//     console.log('Sever is running on ' + port )
// })


import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import { typeDefs } from './graphql/schema.js';
import resolvers from "./graphql/index.js"
dotenv.config();
 connect();


const app = express();

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start({ app });

app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
