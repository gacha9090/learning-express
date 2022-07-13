"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var members_service_1 = require("./members.service");
var router = express_1.Router();
router.get("/members", members_service_1.readAllMember);
router.get("/members/:id", members_service_1.readOneMember);
router.post("/members", members_service_1.createOneMember);
router.put("/members/:id", members_service_1.updateMemberData);
router.patch("/members/:id", members_service_1.patchMemberData);
router.delete("/members/:id", members_service_1.deleteMemberData);
exports.default = router;
//# sourceMappingURL=members.route.js.map