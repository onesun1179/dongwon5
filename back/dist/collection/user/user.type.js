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
exports.LoginObj = exports.TokenObj = exports.ProfileObj = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const user_entity_1 = require("./user.entity");
let ProfileObj = class ProfileObj {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProfileObj.prototype, "googleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_scalars_1.EmailAddressResolver),
    __metadata("design:type", String)
], ProfileObj.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProfileObj.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProfileObj.prototype, "familyName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProfileObj.prototype, "givenName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProfileObj.prototype, "imageUrl", void 0);
ProfileObj = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)()
], ProfileObj);
exports.ProfileObj = ProfileObj;
let TokenObj = class TokenObj {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TokenObj.prototype, "access_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], TokenObj.prototype, "id_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], TokenObj.prototype, "expires_in", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], TokenObj.prototype, "first_issued_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], TokenObj.prototype, "expires_at", void 0);
TokenObj = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)()
], TokenObj);
exports.TokenObj = TokenObj;
let LoginObj = class LoginObj {
};
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], LoginObj.prototype, "user", void 0);
LoginObj = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)()
], LoginObj);
exports.LoginObj = LoginObj;
//# sourceMappingURL=user.type.js.map