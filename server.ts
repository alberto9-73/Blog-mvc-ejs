import express from'express';
import path from 'path';
import dotenv from'dotenv';

dotenv.config()

const app = express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'));
const port = process.env.PORT||3000

app.get('/', (req, res) => {
	res.redirect('/ejs');
});

app.get('/ejs', (req, res) => {
	const nombre = 'Alberto Gonzalez';
	res.render('home/index', { nombre });
});



app.listen(port,()=>{
    console.log(`El servidor se encuentra corriendo http://localhost:${port}`)
})