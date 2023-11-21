import 'dotenv/config';
import express from 'express';
import path from 'path';
import { dbcontext } from './src/db/dbcontex';
import { TypeORMError } from 'typeorm/error';
import logger from './src/helpers/logger';
import noticiasRoutes from './src/routes/noticias.routes';


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

app.use('/noticias',noticiasRoutes)


app.use('/', (req,res)=>{
	res.redirect('noticias')
})

app.listen(port, () => {
	console.log(`El servidor se encuentra corriendo http://localhost:${port} 🤪`)
})
