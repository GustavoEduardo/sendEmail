"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const app_1 = __importDefault(require("./app"));
const PORT = config_1.Config.port;
app_1.default.listen(21033, () => console.log(`server listening on port 21033`));
