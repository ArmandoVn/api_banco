import express, {Application} from 'express';
import indexRoutes from './routes/index';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes)

app.set('port', 3000 || process.env.PORT);
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));