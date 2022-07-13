import * as express from "express";
import membersRouter from "./members/members.route";

// single-tone pattern으로 app.ts 변경(22.07.13)
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  // router를 분리해서 관리하기 위해 private를 따로 빼서 관리함
  private setRoute() {
    this.app.use(membersRouter);
  }

  private setMiddleware() {
    /*
    app.use -> middleware 역할, middleware의 순서가 중요하며, 순서에 따라 특정 router에만 middleware를 적용할 수 있다.
    next -> callback 함수 인자
    */
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    //json body를 받기위한 express middleware
    this.app.use(express.json());

    // 특정 기능의 Router 지정 : 라우터를 분리해서 사용한 것 -> django URLS_py안에 url_{비즈니스로직 파일 모인곳}.py 같은 역할
    this.setRoute();

    // 404 error 처리용 Middle ware는 마지막에 위치하면 처리가 가능하다.
    this.app.use((req, res, next) => {
      console.log("this is router not found logging middleware");
      res.send({ error: "404 not found error" });
    });
  }

  // express listen 포트 지정
  public listen() {
    this.setMiddleware();

    const port: number = 3000;

    this.app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  }
}

// 위에서 class로 지정한 server instance 하나 생성 후 동작
function init() {
  const server = new Server();
  server.listen();
}

init();

const app: express.Express = express();
