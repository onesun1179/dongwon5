"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAppConfigsInput = exports.ListUserAppConfigsInput = exports.CreateUserAppConfigsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const userAppConfigs_entity_1 = require("./userAppConfigs.entity");
let CreateUserAppConfigsInput = class CreateUserAppConfigsInput extends (0, graphql_1.OmitType)(userAppConfigs_entity_1.UserAppConfigs, [
    "createdAt",
    "updatedAt",
]) {
};
CreateUserAppConfigsInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserAppConfigsInput);
exports.CreateUserAppConfigsInput = CreateUserAppConfigsInput;
let ListUserAppConfigsInput = class ListUserAppConfigsInput extends (0, graphql_1.PartialType)(userAppConfigs_entity_1.UserAppConfigs) {
};
ListUserAppConfigsInput = __decorate([
    (0, graphql_1.InputType)()
], ListUserAppConfigsInput);
exports.ListUserAppConfigsInput = ListUserAppConfigsInput;
let UpdateUserAppConfigsInput = class UpdateUserAppConfigsInput extends (0, graphql_1.PartialType)((0, graphql_1.OmitType)(userAppConfigs_entity_1.UserAppConfigs, ["createdAt", "updatedAt"])) {
};
UpdateUserAppConfigsInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserAppConfigsInput);
exports.UpdateUserAppConfigsInput = UpdateUserAppConfigsInput;
//# sourceMappingURL=userAppConfigs.input.js.map