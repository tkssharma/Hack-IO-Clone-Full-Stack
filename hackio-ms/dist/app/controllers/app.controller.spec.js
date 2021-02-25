"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const chai_1 = require("chai");
const app_controller_1 = require("./app.controller");
describe('AppController', () => {
    let appController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [],
        }).compile();
        appController = app.get(app_controller_1.AppController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            chai_1.expect(appController.getHello()).to.equal('Hello World!');
        });
    });
    describe('health', () => {
        it('should return "Health OK!"', () => {
            chai_1.expect(appController.getHealth()).to.equal('Health OK!');
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map