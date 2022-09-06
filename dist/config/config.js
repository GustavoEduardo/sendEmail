"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
require("dotenv/config");
let Config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    url: process.env.URL,
    //email
    mailHost: process.env.MAIL_HOST,
    mailService: process.env.MAIL_SERVICE,
    mailPort: process.env.MAIL_PORT,
    mailSecure: process.env.MAIL_SECURE,
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD
};
exports.Config = Config;
