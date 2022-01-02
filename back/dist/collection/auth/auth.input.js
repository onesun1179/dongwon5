"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthInput = exports.ListAuthInput = exports.CreateAuthInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_entity_1 = require("./auth.entity");
let CreateAuthInput = class CreateAuthInput extends (0, graphql_1.OmitType)(auth_entity_1.Auth, ["id", "createdAt", "updatedAt"]) {
};
CreateAuthInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAuthInput);
exports.CreateAuthInput = CreateAuthInput;
let ListAuthInput = class ListAuthInput extends (0, graphql_1.PartialType)(auth_entity_1.Auth) {
};
ListAuthInput = __decorate([
    (0, graphql_1.InputType)()
], ListAuthInput);
exports.ListAuthInput = ListAuthInput;
let UpdateAuthInput = class UpdateAuthInput extends (0, graphql_1.PartialType)((0, graphql_1.OmitType)(auth_entity_1.Auth, ["id", "createdAt", "updatedAt"])) {
};
UpdateAuthInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateAuthInput);
exports.UpdateAuthInput = UpdateAuthInput;
//# sourceMappingURL=auth.input.js.map