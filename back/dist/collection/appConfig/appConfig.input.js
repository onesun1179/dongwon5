"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppConfigInput = exports.ListAppConfigInput = exports.CreateAppConfigInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const appConfig_entity_1 = require("./appConfig.entity");
let CreateAppConfigInput = class CreateAppConfigInput extends (0, graphql_1.OmitType)(appConfig_entity_1.AppConfig, [
    "createdAt",
    "updatedAt",
]) {
};
CreateAppConfigInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAppConfigInput);
exports.CreateAppConfigInput = CreateAppConfigInput;
let ListAppConfigInput = class ListAppConfigInput extends appConfig_entity_1.AppConfig {
};
ListAppConfigInput = __decorate([
    (0, graphql_1.InputType)()
], ListAppConfigInput);
exports.ListAppConfigInput = ListAppConfigInput;
let UpdateAppConfigInput = class UpdateAppConfigInput extends (0, graphql_1.OmitType)(appConfig_entity_1.AppConfig, [
    "createdAt",
    "updatedAt",
]) {
};
UpdateAppConfigInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateAppConfigInput);
exports.UpdateAppConfigInput = UpdateAppConfigInput;
//# sourceMappingURL=appConfig.input.js.map