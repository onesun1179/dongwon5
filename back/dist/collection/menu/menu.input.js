"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuInput = exports.ListMenuInput = exports.CreateMenuInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const menu_entity_1 = require("./menu.entity");
let CreateMenuInput = class CreateMenuInput extends (0, graphql_1.OmitType)(menu_entity_1.Menu, ["id", "updatedAt", "createdAt"]) {
};
CreateMenuInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMenuInput);
exports.CreateMenuInput = CreateMenuInput;
let ListMenuInput = class ListMenuInput extends menu_entity_1.Menu {
};
ListMenuInput = __decorate([
    (0, graphql_1.InputType)()
], ListMenuInput);
exports.ListMenuInput = ListMenuInput;
let UpdateMenuInput = class UpdateMenuInput extends (0, graphql_1.OmitType)(menu_entity_1.Menu, ["id", "updatedAt", "createdAt"]) {
};
UpdateMenuInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateMenuInput);
exports.UpdateMenuInput = UpdateMenuInput;
//# sourceMappingURL=menu.input.js.map