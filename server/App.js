//1. 라이브러리 임포트
import express from 'express'
import cors from 'cors'

//2. 익스프레스 서버 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어
app.use(cors()); //모든 origin(프론트) 허용
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//4. 라우팅
app.get('/', (req, res, next) => {
    res.send('response -> server.js');
});

app.get('/api/get', (req, res, next) => {
    console.log('/api/get 요청!!');
    const fruitList = [
        {   name : "apple",
            color : "red",
            emoji : "🍎"
        },
        {   name : "lemon",
            color : "yellow",
            emoji : "🍋"
        }
    ]
    res.json({"list" : fruitList});
});

app.post('/api/post', (req, res, next) => {
    //console.log('api/post 요청!!', req.body.name);
    res.json({"result": req.body.name});
});



//5. 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 ----> ${PORT}`);
})
