"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app/app.module");
const swagger_2 = require("./swagger/swagger");
const NEST_LOGGING = false;
const LISTEN_PORT = 3000;
async function bootstrap() {
    const opts = {};
    if (!NEST_LOGGING) {
        opts.logger = false;
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, opts);
    swagger_1.SwaggerModule.setup('api/v1', app, swagger_2.createDocument(app));
    await app.listen(process.env.PORT || LISTEN_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map