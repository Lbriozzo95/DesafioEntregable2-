"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operaciones = void 0;
var Operaciones = /** @class */ (function () {
    function Operaciones(n1, n2, operation) {
        this.n1 = n1;
        this.n2 = n2;
        this.operation = operation;
    }
    Operaciones.prototype.resultado = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            switch (_this.operation) {
                case "sumar":
                    res(_this.n1 + _this.n2);
                    break;
                case "restar":
                    res(_this.n1 - _this.n2);
                default:
                    rej("Introducir sumar o restar!");
                    break;
            }
        });
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
