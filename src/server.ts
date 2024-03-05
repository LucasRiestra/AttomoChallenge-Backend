import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import FileUpload from 'express-fileupload';
import userRoutes from './routes/user.routes';
import gameRoutes from './routes/games.routes'; 
import { auth } from 'express-openid-connect';


const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly string stored in env',
  baseURL: 'http://localhost:4000/',
  clientID: 'your-auth0-client-id',
  issuerBaseURL: 'https://your-auth0-domain'
};

app.use(express.json());
const corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(FileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: {fileSize: 10000},
    abortOnLimit: true
}));


app.use(auth(config));

app.use('/', userRoutes); 
app.use('/', gameRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ message: "This is working bro!" });
});

export default app;
