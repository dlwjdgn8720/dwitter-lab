 import * as repository from '../repository/apiRepository.js'

 export const getFruits = (req, res, next) => {
    //console.log('/api/get 요청!!');
    const fruitList = repository.getFruits();
    res.json({ "list": fruitList });
};

export const getProducts = (req, res, next) => {
    const products = repository.getProducts();
    res.json({ "products": products })
}

export const getProductDetail = (req, res, next) => {
    //req = { "param" : { 'pid': 'P0001' } }
    //req = { "param" : [{ 'pid': 'P0001' }] }
    //console.log(req.params.pid);
    res.json({ "result": `${req.params.pid}의 상세정보` });
}

export const getFormData = (req, res, next) => {
    res.json({ "result": true });
}