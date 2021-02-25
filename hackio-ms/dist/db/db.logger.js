"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLogger = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../logger/logger");
let DbLogger = class DbLogger {
    constructor(logger) {
        this.logger = logger;
    }
    stringifyQuery(query, parameters) {
        const parametersStr = parameters ? ` (${JSON.stringify(parameters)})` : '';
        return `${query}${parametersStr}`;
    }
    logQuery(query, parameters, queryRunner) {
        this.logger.debug(`DB: ${this.stringifyQuery(query, parameters)}`);
    }
    logQueryError(error, query, parameters, queryRunner) {
        this.logger.error(`DB: ${error} - ${this.stringifyQuery(query, parameters)}`);
    }
    logQuerySlow(time, query, parameters, queryRunner) {
        this.logger.warn(`DB: SLOW (${time}) - ${this.stringifyQuery(query, parameters)}`);
    }
    logSchemaBuild(message, queryRunner) {
        this.logger.info(`DB: ${message}`);
    }
    logMigration(message, queryRunner) {
        this.logger.info(`DB: ${message}`);
    }
    log(level, message, queryRunner) {
        switch (level) {
            case 'log':
            case 'info':
                this.logger.info(`${message}`);
                break;
            case 'warn':
                this.logger.warn(`${message}`);
                break;
            default:
                this.logger.debug(`${message}`);
                break;
        }
    }
};
DbLogger = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.Logger !== "undefined" && logger_1.Logger) === "function" ? _a : Object])
], DbLogger);
exports.DbLogger = DbLogger;
//# sourceMappingURL=db.logger.js.map