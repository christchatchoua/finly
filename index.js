const express = require('express')
const morgan = require ('morgan')
const userRouter = require('./routes/user.route');
const session = require('express-session');
const dashboardRouter = require('./routes/dashboard.route');
const flash = require('connect-flash');
const { verifyUser } = require('./libs/middleware');

require('dotenv').config();
require('./libs/dbConnect');


const app = express();
/*User router function */
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
    });
app.use('/users', userRouter);


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use('/dashboard', verifyUser, dashboardRouter);
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
    })
    )

 app.use(flash());

app.get('*',(req, res)=>{
    res.status(404).render('index', {
        title:'Not found',
         message: 'Not Found' });
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