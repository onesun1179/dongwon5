"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePrimaryInput = exports.ListPrimaryInput = exports.CreatePrimaryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
class CreatePrimaryInput {
}
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    })
], CreatePrimaryInput.prototype, "desc", void 0);
exports.CreatePrimaryInput = CreatePrimaryInput;
class ListPrimaryInput {
}
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    })
], ListPrimaryInput.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date)
], ListPrimaryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date)
], ListPrimaryInput.prototype, "updatedAt", void 0);
exports.ListPrimaryInput = ListPrimaryInput;
class UpdatePrimaryInput {
}
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    })
], UpdatePrimaryInput.prototype, "desc", void 0);
exports.UpdatePrimaryInput = UpdatePrimaryInput;
