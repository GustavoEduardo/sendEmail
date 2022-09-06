"use strict";
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
const errorReturn_1 = __importDefault(require("../../helpers/serviceDefault/errorReturn"));
const successReturn_1 = __importDefault(require("../../helpers/serviceDefault/successReturn"));
const EmailService_1 = __importDefault(require("../services/EmailService"));
class EmailController {
    send(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = req.body;
                let result = yield EmailService_1.default.send(data);
                let retorno = (0, successReturn_1.default)({
                    result,
                    message: "Email enviado com sucesso"
                });
                res.status(retorno.code).json(retorno);
            }
            catch (e) {
                let retorno = (0, errorReturn_1.default)({
                    message: e.message,
                    result: e.erros
                });
                return res.status(retorno.code).json(retorno);
            }
        });
    }
}
exports.default = new EmailController();
