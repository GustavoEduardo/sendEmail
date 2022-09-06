"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SuccessReturn({ code = 200, status = "success", message = "Ação Realizada com sucesso", result = [] }) {
    let successReturn = {
        code,
        status,
        message,
        result
    };
    return successReturn;
}
exports.default = SuccessReturn;
