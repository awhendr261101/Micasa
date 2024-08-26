import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// import { User } from './model/users.js';
import { userRouter } from './controller/userController.js';

import { prodRouter } from './controller/productsController.js';

import cors from 'cors';



const app = express();
const port = +process.env.PORT || 4001;
const router = express.Router();

// middleware

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

app.use(cors())

app.use('/users', userRouter)
app.use('/products', prodRouter)

app.use(
     
    express.static('./static'),
    express.json(), 
    express.urlencoded({extended: true}), 
    
)

// endpoints
app.get('^/$|/eShop', (req, res) =>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'));
})





app.listen(port , () => {
    console.log('Server is running on ' + port)
})

