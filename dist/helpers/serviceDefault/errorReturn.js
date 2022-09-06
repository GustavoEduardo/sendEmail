"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorReturn({ code = 400, status = "error", message = "Ocorreu um erro", result = [] }) {
    let errorReturn = {
        code,
        status,
        message,
        result
    };
    return errorReturn;
}
exports.default = ErrorReturn;
