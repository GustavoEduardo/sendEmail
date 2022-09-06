"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmailController_1 = __importDefault(require("../api/controllers/EmailController"));
const routes = (0, express_1.Router)();
routes.post('/send-email', EmailController_1.default.send);
exports.default = routes;
