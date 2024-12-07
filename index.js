const express = require('express')
const morgan = require ('morgan')

require('dotenv').config();
require('./libs/dbConnect');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.render('index', {message:'Hello from chris'});
});

app.get("/contact",(req,res) =>{
res.render('index',{message:'The contact page'})
});

app.get('/about',(req, res)=>{
    res.render('index', { message: 'The About Page' });
});

app.get("/valhalla",(req, res) =>{
    res.render('index', { message: 'Welcome to the Valhalla hall of the hero , under the guidance of the valkyries "master valhalla , master thyself"' });
});

app.get('*',(req, res)=>{
    res.status(404).render('index', { message: 'Not Found' });
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`);
});


















/*const http=require('http');

const server = http.createServer((req,res)=>{
    const { url } = req;/* this command helps us not use req.url for evry instance just url==*/
 /*   console.log(url);
    if(url === '/') {
        res.end('So glamour');
        } else if (url === '/contact') {
        res.end('The Contact Page');
        } else if (url === '/about') {
        res.end('The About Page');
        } else {
        res.writeHead(404)
        res.end('Not Found');
        }
});
server.listen(3000,() => {
    console.log('Server running on port 3000');
})*/