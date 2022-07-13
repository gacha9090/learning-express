"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMemberData = exports.patchMemberData = exports.updateMemberData = exports.createOneMember = exports.readOneMember = exports.readAllMember = void 0;
var members_model_1 = require("./members.model");
var readAllMember = function (req, res) {
    try {
        var members = members_model_1.EbridgeMember;
        res.status(200).send({
            sucess: true,
            data: {
                members: members,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readAllMember = readAllMember;
var readOneMember = function (req, res) {
    try {
        var params_1 = req.params;
        var member = members_model_1.EbridgeMember.find(function (member) {
            return member.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                member: member,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readOneMember = readOneMember;
var createOneMember = function (req, res) {
    try {
        var data = req.body;
        members_model_1.EbridgeMember.push(data);
        res.status(201).send({
            success: true,
            data: { data: data },
        });
    }
    catch (error) {
        error.message = "Create failed";
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.createOneMember = createOneMember;
var updateMemberData = function (req, res) {
    try {
        var params_2 = req.params;
        var body_1 = req.body;
        console.log("body :: " + body_1);
        var result_1;
        members_model_1.EbridgeMember.forEach(function (member) {
            if (member.id === params_2.id) {
                member = body_1;
                result_1 = member;
            }
        });
        res.status(200).send({
            success: true,
            data: { result: result_1 },
        });
    }
    catch (error) {
        error.message = "Create failed";
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.updateMemberData = updateMemberData;
var patchMemberData = function (req, res) {
    try {
        var params_3 = req.params;
        var body_2 = req.body;
        console.log("body :: " + body_2);
        var result_2;
        members_model_1.EbridgeMember.forEach(function (member) {
            if (member.id === params_3.id) {
                member = __assign(__assign({}, member), body_2);
                result_2 = member;
            }
        });
        res.status(200).send({
            success: true,
            data: { result: result_2 },
        });
    }
    catch (error) {
        error.message = "Create failed";
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.patchMemberData = patchMemberData;
var deleteMemberData = function (req, res) {
    try {
        var params_4 = req.params;
        console.log("params id :: " + params_4.id);
        var newEbMember = members_model_1.EbridgeMember.filter(function (member) { return member.id !== params_4.id; });
        console.log("new member :: " + newEbMember);
        res.status(200).send({
            success: true,
            data: newEbMember,
        });
    }
    catch (error) {
        error.message = "Create failed";
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.deleteMemberData = deleteMemberData;
//# sourceMappingURL=members.service.js.map