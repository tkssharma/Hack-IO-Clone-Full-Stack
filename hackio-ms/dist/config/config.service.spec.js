"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const config_default_1 = require("./config.default");
const config_service_1 = require("./config.service");
const MOCK_DB_CONFIG = {
    url: 'postgres://test:test@postgres:5432/postgres'
};
const MOCK_CONFIG = {
    env: 'testenv',
    db: MOCK_DB_CONFIG,
    logLevel: 'testloglevel',
    newRelicKey: 'testnewrelickey',
    azure: {
        logoUpload: {
            connectionString: '',
            containerName: ''
        },
        searchLogUpload: {
            connectionString: '',
            containerName: ''
        },
    },
    auth: {
        jwksuri: 'https://auth.example.io/.well-known/jwks.json',
        audience: 'https://example.com/v1',
        tokenIssuer: 'https://auth.example.io/',
        authProvider: 'auth0',
    }
};
const ALL_ENV_KEYS = [
    'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'DB_HOST', 'DB_DIALECT',
    'NODE_ENV', 'ENVIRONMENT', 'LOG_LEVEL', 'NEW_RELIC_KEY',
];
describe('ConfigService', () => {
    let config;
    beforeEach(() => {
        for (const key of ALL_ENV_KEYS) {
            delete process.env[key];
        }
        config = new config_service_1.ConfigService();
    });
    describe('constructor', () => {
        it('should use default config if parameterless', () => {
            chai.expect(config.get()).to.deep.equal(config_default_1.DEFAULT_CONFIG);
        });
        it('should use passed config', () => {
            config = new config_service_1.ConfigService(MOCK_CONFIG);
            chai.expect(config.get()).to.deep.equal(MOCK_CONFIG);
        });
    });
    describe('loadFromEnv', () => {
        it('should use defaults when env vars are missing', () => {
            config.loadFromEnv();
            chai.expect(config.get().db).to.deep.equal(Object.assign({}, config_default_1.DEFAULT_CONFIG.db));
        });
        it('should load base config properties from environment', () => {
            process.env.NODE_ENV = MOCK_CONFIG.env;
            process.env.LOG_LEVEL = MOCK_CONFIG.logLevel;
            process.env.NEW_RELIC_KEY = MOCK_CONFIG.newRelicKey;
            process.env.AUTH_PROVIDER = MOCK_CONFIG.auth.authProvider;
            process.env.AUTH0_JWKS_URL = MOCK_CONFIG.auth.jwksuri;
            process.env.AUTH0_TOKEN_ISSUER_URL = MOCK_CONFIG.auth.tokenIssuer;
            process.env.AZURE_SEARCH_LOG_STORAGE_CONNECTION_STRING = MOCK_CONFIG.azure.searchLogUpload.connectionString;
            process.env.AZURE_SEARCH_LOG_STORAGE_CONTAINER_NAME = MOCK_CONFIG.azure.searchLogUpload.containerName;
            process.env.AZURE_LOGO_STORAGE_CONNECTION_STRING = MOCK_CONFIG.azure.logoUpload.connectionString;
            process.env.AZURE_LOGO_STORAGE_CONTAINER_NAME = MOCK_CONFIG.azure.logoUpload.containerName;
            config.loadFromEnv();
            chai.expect(config.get()).to.deep.equal(Object.assign(Object.assign({}, config_default_1.DEFAULT_CONFIG), { db: Object.assign({}, config_default_1.DEFAULT_CONFIG.db), env: MOCK_CONFIG.env, logLevel: MOCK_CONFIG.logLevel, newRelicKey: MOCK_CONFIG.newRelicKey }));
        });
        it('should load database config properties from environment', () => {
            process.env.DATABASE_URL = MOCK_DB_CONFIG.url;
            config.loadFromEnv();
            chai.expect(config.get().db).to.deep.equal(MOCK_DB_CONFIG);
        });
    });
});
//# sourceMappingURL=config.service.spec.js.map