"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const utilCommon = new (class {
    switchCase(value, arr = [], _default) {
        const a = lodash_1.default.find(arr, ([k]) => lodash_1.default.isEqual(k, value))?.[1];
        if (!lodash_1.default.isUndefined(a)) {
            return a;
        }
        else if (!lodash_1.default.isUndefined(_default)) {
            return _default;
        }
        else {
            return null;
        }
    }
    contains(list, value) {
        return list.some((item) => item === value);
    }
    makeStringUnionScalar(unionGroup, description = "") {
        return class Validator {
            constructor() {
                this.description = description;
            }
            parseValue(value) {
                console.log("parseValue", value);
                return value;
            }
            serialize(value) {
                console.log("serialize", value);
                return value;
            }
            parseLiteral(ast) {
                return null;
            }
        };
    }
    parseTree(array, keyFieldName = "id", parentKeyFieldName = "parentId", childrenFieldName = "children") {
        const _array = (0, lodash_1.cloneDeep)(array);
        _array
            .filter((o) => o[childrenFieldName].length > 0)
            .forEach((o) => {
            o[childrenFieldName] = _array.filter((oo) => oo[parentKeyFieldName] === o[keyFieldName]);
        });
        return _array;
    }
})();
exports.default = utilCommon;
//# sourceMappingURL=utilCommon.js.map