import * as express from "express";
import membersRouter from "./members/members.route";

const app: express.Express = express();

const port: number = 3000;

/*
app.use -> middleware 역할, middleware의 순서가 중요하며, 순서에 따라 특정 router에만 middleware를 적용할 수 있다.
next -> callback 함수 인자
*/
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

//json body를 받기위한 express middleware
app.use(express.json());

// 특정 기능의 Router 지정 : 라우터를 분리해서 사용한 것 -> django URLS_py안에 url_{비즈니스로직 파일 모인곳}.py 같은 역할
app.use(membersRouter);

// 404 error 처리용 Middle ware는 마지막에 위치하면 처리가 가능하다.
app.use((req, res, next) => {
  console.log("this is router not found logging middleware");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
