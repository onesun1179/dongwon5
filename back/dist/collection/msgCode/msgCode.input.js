"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMsgCodeInput = exports.ListMsgCodeInput = exports.CreateMsgCodeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const msgCode_entity_1 = require("./msgCode.entity");
let CreateMsgCodeInput = class CreateMsgCodeInput extends (0, graphql_1.OmitType)(msgCode_entity_1.MsgCode, ["createdAt", "updatedAt"]) {
};
CreateMsgCodeInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMsgCodeInput);
exports.CreateMsgCodeInput = CreateMsgCodeInput;
let ListMsgCodeInput = class ListMsgCodeInput extends (0, graphql_1.PartialType)(msgCode_entity_1.MsgCode) {
};
ListMsgCodeInput = __decorate([
    (0, graphql_1.InputType)()
], ListMsgCodeInput);
exports.ListMsgCodeInput = ListMsgCodeInput;
let UpdateMsgCodeInput = class UpdateMsgCodeInput extends (0, graphql_1.PartialType)((0, graphql_1.OmitType)(msgCode_entity_1.MsgCode, ["createdAt", "updatedAt"])) {
};
UpdateMsgCodeInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateMsgCodeInput);
exports.UpdateMsgCodeInput = UpdateMsgCodeInput;
//# sourceMappingURL=msgCode.input.js.map