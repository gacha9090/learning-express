"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var members_route_1 = require("./members/members.route");
var app = express();
var port = 3000;
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is logging middleware");
    next();
});
app.use(express.json());
app.use(members_route_1.default);
app.use(function (req, res, next) {
    console.log("this is router not found logging middleware");
    res.send({ error: "404 not found error" });
});
app.listen(port, function () {
    console.log("Example app listening on port http://localhost:" + port);
});
//# sourceMappingURL=app.js.map