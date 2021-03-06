require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));

server.start({ port: PORT }, () => console.log(`서버 포트 http://localhost:${PORT}`));
