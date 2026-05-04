## 1. Express 개발환경


#### (1) Express 패키지 설치
```
1️⃣ 서버 폴더 생성
    예) mkdir node-server
        

2️⃣ 폴더 초기화
    예) cd node-server
        npm init --yes 

3️⃣ express 설치
    예) npm i express
        npm i nodemon -save-dev

4️⃣ package.json 확인
- type을 module로 수정
- scripts에 "start": "nodemon app" 추가
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}

```







#### (2) Express를 사용하는 이유
```
1) 검증된 생태계 - 사용자가 많다
2) 빠른 서버 생성
3) 기볍고 유연한 미들웨어 구조
```

#### (3) Express.js 기본 라우팅과 CRUD API


##### 1) 라우팅이란?
```
클라이언트가 특정 URI(엔드포인트)로 요청을 보내면, 서버가 그 요청을 받아서
처리하는 방식을 정의하는 것이다.

예) http://localhost:8080/list --> /list 요청에 따른 라우팅 진행
```

#### 2) 라우팅 정의
```
1️⃣ express 모듈 import 및 생성
    예) const express = require('express');
        const app = express();

2️⃣ app 객체의 메서드로 HTTP 요청을 라우팅함
    예) app.get()       # R(Read)
        app.post()      # C(Create)
        app.put()       # U(Update)
        app.delete()    # D(Delete)

3️⃣ 라우팅 콜백 함수 정의
    (형식) app.get(경로, 콜백함수)
    예) app.get('/test', function(req, res, next()){
            res.send(...)
        })

    예) app.get('/test/:id', function(req, res, next()){
            res.send(...)
        })

4️⃣ express 서버 시작
    (형식) app.listen(포트번호, 콜백함수)
    예) app.listen(8080) 
```

#### 3) 라우팅 정의 실습 코드

```
//모듈 호출 및 인스턴스 생성
const express = require('express')
const app = express()


//데이터 요청(R)
app.get('/get', function(req, res, next) {
			res.send(...)
})

//데이터 생성(C)
app.post('/post', function(req, res, next) {
			res.send(...)
})

//데이터 수정(U)
app.put('/put', function(req, res, next) {
			res.send(...)
})

//데이터 삭제(D)
app.delete('/delete', function(req, res, next) {
			res.send(...)
})


//서버 실행
app.listen(8080)
```

#### 4) Express 미들웨어(Middleware)

##### Express 미들웨어(Middleware)

1) 미들웨어 체인 흐름

![alt text](image-1.png)

2) 핵심개념
```
🎯 미들웨어는 요청(Request)과 응답(Response) 사이에서 실행되는 함수입니다.

클라이언트 요청 → [미들웨어1] → [미들웨어2] → [미들웨어3] → 라우터 → 클라이언트

next()를 호출해야 다음 미들웨어로 넘어갑니다.

🎯 기본 구조
    app.use((req, res, next) => {
    // 처리 로직
    next(); // 다음 미들웨어로 전달
    });
```

3) 미들웨어 종류
1️⃣ app.use(express.json())
```
- 역할 : JSON 형식으로 데이터를 보냈을 때
- 사용 : REST API(fetch, axios 등으로 보내는 JSON 데이터)
- Content-Type : application/json
```

클라이언트 JSON
```
// 클라이언트가 이렇게 보내면:
fetch('/api', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: '홍길동' })
});
```

서버
```
// 서버에서 req.body로 접근 가능:
app.use(express.json())

app.post('/api', (req, res) => {
  console.log(req.body.name); // '홍길동'
});
```

2️⃣ app.use(express.urlencoded({ extended: false }))

```
- 역할 : HTML Form 형식으로 데이터를 보냈을 때
- 사용 : <form method="POST"> 전송 시
- Content-Type : application/x-www-form-urlencoded
클라이언트 Form
<!-- HTML Form -->
<form action="/login" method="POST">
  <input name="username" />
  <input name="password" type="password" />
  <button>로그인</button>
</form>
```

서버
```
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  console.log(req.body.username); // form 입력값
});
```

3️⃣ app.use(express.static('public'))

```
- 역할 : 정적 파일을 자동으로 제공
- 사용 : HTML, CSS, 이미지, JS 파일 
- 폴더 : 프로젝트 루트의 public/ 폴더


프로젝트/
├── public/
│   ├── index.html   → http://localhost:3000/index.html
│   ├── style.css    → http://localhost:3000/style.css
│   └── logo.png     → http://localhost:3000/logo.png
└── app.js
```

