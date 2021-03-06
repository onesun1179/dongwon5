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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePrimaryInput = exports.ListPrimaryInput = exports.CreatePrimaryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
class CreatePrimaryInput {
}
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], CreatePrimaryInput.prototype, "desc", void 0);
exports.CreatePrimaryInput = CreatePrimaryInput;
class ListPrimaryInput {
}
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], ListPrimaryInput.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_scalars_1.DateTimeResolver),
    __metadata("design:type", Date)
], ListPrimaryInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_scalars_1.DateTimeResolver),
    __metadata("design:type", Date)
], ListPrimaryInput.prototype, "updatedAt", void 0);
exports.ListPrimaryInput = ListPrimaryInput;
class UpdatePrimaryInput {
}
__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], UpdatePrimaryInput.prototype, "desc", void 0);
exports.UpdatePrimaryInput = UpdatePrimaryInput;
//# sourceMappingURL=primary.input.js.map