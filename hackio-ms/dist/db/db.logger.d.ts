import { Logger as TypeORMLogger, QueryRunner } from 'typeorm';
import { Logger } from '../logger/logger';
export declare class DbLogger implements TypeORMLogger {
    private logger;
    constructor(logger: Logger);
    private stringifyQuery;
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): void;
    logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner): void;
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): void;
    logSchemaBuild(message: string, queryRunner?: QueryRunner): void;
    logMigration(message: string, queryRunner?: QueryRunner): void;
    log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): void;
}
