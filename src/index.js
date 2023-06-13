// import server from "./server.js"
//  import { connect } from "./database.js";
// import dotenv from 'dotenv';
// // import cors from 'cors';

// server.start( { port: 3000}, ( { port } ) => {
//     console.log('Sever is running on ' + port )
// })

import { connect } from "./database.js";
import dotenv from 'dotenv';
import { GraphQLServer } from 'graphql-yoga';
import express from 'express';
import { typeDefs } from './graphql/schema.js';
import resolvers from "./graphql/index.js"
import cors from 'cors';
dotenv.config();
 connect();


const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start({ app });

app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
