import express from 'express';

import bodyParser from 'body-parser';

import { Products } from '../model/products.js';

// import  } from '../middleware/authenticateUser.js';




const prodRouter = express.Router();

prodRouter.use(bodyParser.json());


prodRouter.get('/', (req, res) => {
    Products.fetchAllProducts(req, res)
})

prodRouter.post('/addproduct', (req, res) => {
    Products.addProduct(req, res)
})

prodRouter.get('/recent', (req, res) => {
    Products.fetchRecentProducts(req, res)
})

prodRouter.get('/:id', (req, res) => {
    Products.fetchOneProduct(req, res)
})

prodRouter.patch('/:id', (req, res) => {
    Products.updateProduct(req, res)
})

prodRouter.delete('/:id', (req, res) => {
    Products.deleteProduct(req, res)
})


export {
    prodRouter  
}