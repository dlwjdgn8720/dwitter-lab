//1. 라이브러리 임포트
import express from 'express'
// const express = require('express'); // type = commonjs
import cors from 'cors'
import apiRouter from './routes/api.js'
import usersRouter from './routes/users.js'

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어
app.use(cors()); //모든 origin(프론트) 허용
app.use(express.json()); //body로 넘어오는 데이터가 문자열로 넘어와서 json 문자열 파싱
app.use(express.urlencoded({ extended: false }));

//4. 라우팅
app.use('/api', apiRouter);
app.use('/users', usersRouter);

//5. 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 ----> ${PORT}`);
});
