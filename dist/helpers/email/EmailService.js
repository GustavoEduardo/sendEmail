"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const config_1 = require("../../config/config");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class EmailService {
    send({ to, message, bcc }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Enviar para " + to.email);
                const transporter = nodemailer.createTransport({
                    host: config_1.Config.mailHost,
                    port: Number(config_1.Config.mailPort),
                    secure: false,
                    auth: {
                        user: config_1.Config.mailUser,
                        pass: config_1.Config.mailPassword
                    },
                    tls: { rejectUnauthorized: false }
                });
                yield transporter.sendMail({
                    from: config_1.Config.mailUser,
                    to: to.email,
                    subject: message.subject,
                    text: message.body.replace(/(<([^>]+)>)/ig, ""),
                    html: message.body
                });
                return true;
            }
            catch (error) {
                console.error("MAIL ERROR => ", error);
                throw { erros: error.message };
            }
        });
    }
    template(filename, replaces) {
        try {
            let pathname = path_1.default.resolve(__dirname, `templates/${filename}`);
            let html = fs_1.default.readFileSync(pathname, "utf8");
            for (const [key, value] of Object.entries(replaces)) {
                html = html.split(`{{${key}}}`).join(String(value));
            }
            return html;
        }
        catch (error) {
            return false;
        }
    }
}
exports.default = EmailService;
