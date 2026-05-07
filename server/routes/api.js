import express from 'express';
import * as controller from '../controller/apiController.js';

const router = express.Router(); // router 객체 생성

//실제 호출 주소 : /api/get
router.get('/get', controller.getFruits);
router.get("/products", controller.getProducts);
//pid 값이 파라미터로 전달
router.get("/products/:pid", controller.getProductDetail);
//form 데이터 전송
router.post("/post", controller.getFormData);

export default router;