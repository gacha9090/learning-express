"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var members_route_1 = require("./members/members.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(members_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("this is logging middleware");
            next();
        });
        this.app.use(express.json());
        this.setRoute();
        this.app.use(function (req, res, next) {
            console.log("this is router not found logging middleware");
            res.send({ error: "404 not found error" });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleware();
        var port = 3000;
        this.app.listen(port, function () {
            console.log("Example app listening on port http://localhost:" + port);
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
var app = express();
//# sourceMappingURL=app.js.map