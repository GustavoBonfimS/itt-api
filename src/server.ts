import express from 'express';
import dotenv from 'dotenv';
import findRemove from 'find-remove';
dotenv.config();
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';

import 'express-async-errors';
import errorHandler from './errors/handler';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
const uploadsPath = path.join(__dirname, '..', 'uploads')
setInterval(() => {
  console.log(findRemove(uploadsPath, { age: { seconds: 600 }, extensions: ['.jpg','.jpeg', '.png'] }));
  console.log('removing old images');
}, 300000);''

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`api executando na porta ${port}`);
});
