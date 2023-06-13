// import resolvers from "./graphql/index.js"
// import { GraphQLServer} from "graphql-yoga";
// import path from "path"
// import { fileURLToPath } from 'url';
// import cors from 'cors'
// //------
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname( __filename );
// console.log( path.join( __dirname, "graphql/schema.graphql" ))
// //-----
// //relativas    /b17-web

// //absolutas   /c/Users/carlf/Desktop/b17-web
// const server = new GraphQLServer( {
//     typeDefs: path.join( __dirname, "graphql/schema.graphql" ),  // -> /c/Users/carlf/Desktop/b17-web/graphql/schema.graphql //http:heroku-app.com/graphql/schema.graphql"
//     resolvers: resolvers                                                     
// } )
// server.express.use(cors({
//     origin: '*', // Configura aquí los orígenes permitidos, ej. 'http://localhost:3000'
//     methods: ['GET', 'POST'], // Configura los métodos permitidos
//     allowedHeaders: '*', // Configura '*' para permitir todos los encabezados
//   }));

// export default server
import resolvers from "./graphql/index.js";
import { GraphQLServer } from "graphql-yoga";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname, "graphql/schema.graphql"));

const allowCrossOrigin = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

const server = new GraphQLServer({
  typeDefs: path.join(__dirname, "graphql/schema.graphql"),
  resolvers
});

server.express.use(allowCrossOrigin);

export default server;
