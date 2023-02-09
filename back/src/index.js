import express from 'express';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
import db from './config/db.js';
import cors from 'cors';

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const allowedOrigins = ['http://localhost:4200'];

const options = {
  origin: allowedOrigins
};

app.use(cors(options));

const PORT = 3000;

app.use('/api/v1', routes);

app.use((err,_req,res,_next) => {
  res.status(500).json({
    success:false,
    message: err.message
  })
})
// carpeta publica
app.use(express.static('./assets/uploads'));

app.listen(PORT, () => console.log('SERVIDOR ESCUCHANDO'));