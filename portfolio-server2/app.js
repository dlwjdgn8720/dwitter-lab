//1. 라이브러리 임포트
import express from 'express';
import cors from 'cors';
import headerRouter from './routes/header.js'
import contentRouter from './routes/content.js'
import footerRouter from './routes/footer.js'

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어
app.use(cors());   //모든 origin(프론트) 허용
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//4. 라우팅
app.use('/header', headerRouter);
app.use('/content', contentRouter);
app.use('/footer', footerRouter);


//5. 익스프레스 서버 객체 실행
app.listen(PORT, () => {
    console.log(`서버 실행 --->> ${PORT}`);
});
