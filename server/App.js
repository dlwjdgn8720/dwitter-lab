//1. 라이브러리 임포트
import express from 'express'
// const express = require('express'); // type = commonjs
import cors from 'cors'

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어
app.use(cors()); //모든 origin(프론트) 허용
app.use(express.json()); //body로 넘어오는 데이터가 문자열로 넘어와서 json 문자열 파싱
app.use(express.urlencoded({ extended: false }));

//4. 라우팅
app.get('/', (req, res, next) => {
    res.send('response -> server.js');
});

app.get('/api/get', (req, res, next) => {
    //console.log('/api/get 요청!!');
    const fruitList = [
        {
            name: "apple",
            color: "red",
            emoji: "🍎"
        },
        {
            name: "lemon",
            color: "yellow",
            emoji: "🍋"
        }
    ]
    res.json({ "list": fruitList });
});

app.get("/api/products", (req, res, next) => {
    const products = [
        {
            "pid": "P0001",
            "name": "갸또 쇼콜라",
            "price": 43000,
            "img": "/images/product1.jpg"
        },
        {
            "pid": "P0002",
            "name": "쉭쎄",
            "price": 20000,
            "img": "/images/product2.jpg"
        },
        {
            "pid": "P0003",
            "name": "초코 구운과자 묶음",
            "price": 13000,
            "img": "/images/product3.jpg"
        },
        {
            "pid": "P0004",
            "name": "통팥앙금빵",
            "price": 2500,
            "img": "/images/product4.jpg"
        },
        {
            "pid": "P0005",
            "name": "브라우니",
            "price": 20800,
            "img": "/images/product5.jpg"
        }
    ];

    res.json({ "products": products })
});

//pid 값이 파라미터로 전달
app.get("/api/products/:pid", (req, res, next) => {
    //req = { "param" : { 'pid': 'P0001' } }
    //req = { "param" : [{ 'pid': 'P0001' }] }
    //console.log(req.params.pid);
    res.json({ "result": `${req.params.pid}의 상세정보` });
});

//form 데이터 전송
app.post("/api/post", (req, res, next) => {
    res.json({ "result": true });
});

app.post("/users/login", (req, res, next) => {
    const {id, pwd} = req.body.data;
    const users = [
        {"id": "test", "pwd": "1234"},
        {"id": "hong", "pwd": "1111"},
        {"id": "test1234", "pwd": "test1234"}
    ];
    console.log(id, pwd);
    const userIdx = users.findIndex(user => user.id === id && user.pwd === pwd);
    userIdx !== -1 ? res.json({ "result": true }) : res.json({ "result": false })
});

//5. 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 ----> ${PORT}`);
});
