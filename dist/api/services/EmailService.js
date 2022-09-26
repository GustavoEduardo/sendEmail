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
const EmailTemplateService_1 = __importDefault(require("../../helpers/email/EmailTemplateService"));
class UsuarioService {
    send(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let preenchido = yield this.validar(data);
            if (preenchido) {
                var retorno = EmailTemplateService_1.default.novaPesquisa(data);
            }
            else {
                var retorno = "Campos ausentes";
            }
            return retorno;
        });
    }
    validar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.valorProduto || data.valorProduto == '' || data.valorProduto == "")
                return false;
            if (!data.notobookEmMaos || data.notobookEmMaos == '' || data.notobookEmMaos == "")
                return false;
            if (!data.modelo || data.modelo == '' || data.modelo == "")
                return false;
            if (!data.anoFabricacao || data.anoFabricacao == '' || data.anoFabricacao == "")
                return false;
            if (!data.dataCompra || data.dataCompra == '' || data.dataCompra == "")
                return false;
            if (!data.nome || data.nome == '' || data.nome == "")
                return false;
            if (!data.dataNascimento || data.dataNascimento == '' || data.dataNascimento == "")
                return false;
            if (!data.rg || data.rg == '' || data.rg == "")
                return false;
            if (!data.email || data.email == '' || data.email == "")
                return false;
            if (!data.celular || data.celular == '' || data.celular == "")
                return false;
            if (!data.cep || data.cep == '' || data.cep == "")
                return false;
            if (!data.endereco || data.endereco == '' || data.endereco == "")
                return false;
            if (!data.numeroCasa || data.numeroCasa == '' || data.numeroCasa == "")
                return false;
            if (!data.cidade || data.cidade == '' || data.cidade == "")
                return false;
            if (!data.uf || data.uf == '' || data.uf == "")
                return false;
            if (!data.cpf || data.cpf == '' || data.cpf == "")
                return false;
            if (!data.termos || data.termos == '' || data.termos == "")
                return false;
            return true;
        });
    }
}
exports.default = new UsuarioService();
