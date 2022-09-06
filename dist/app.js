"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
/**
 * global middlewares
 */
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '200mb' }));
/**
 * routes
 */
app.use('', routes_1.default);
/**
 * static files route
 */
app.use(express_1.default.static("static"));
exports.default = app;
