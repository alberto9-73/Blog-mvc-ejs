import 'dotenv/config';
import express from 'express';
import path from 'path';
import { dbcontext } from './src/db/dbcontex';
import { TypeORMError } from 'typeorm/error';
import logger from './src/helpers/logger';

process.env.TZ = 'America/Argentina/Buenos_Aires';




dbcontext
	.initialize()
	.then(() => { })
	.catch((err: TypeORMError) => {
		logger.error(`Error al iniciar la base de datos: ${err.message}`);
	});




const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'));
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.redirect('/ejs');
});

app.get('/ejs', (req, res) => {
	const nombre = 'Alberto Gonzalez';
	res.render('home/index', { nombre });
});



app.listen(port, () => {
	console.log(`El servidor se encuentra corriendo http://localhost:${port} 🤪`)
})