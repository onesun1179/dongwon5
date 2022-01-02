"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const utilCommon = new (class {
    /**
     * @example
     *    - utilCommon.switchCase(1, [[0, 2], [1, 3]], 4) => 3
     *    - utilCommon.switchCase(0, [[0, 2], [1, 3]], 4) => 2
     *    - utilCommon.switchCase(3, [[0, 2], [1, 3]], 4) => 4
     *    - utilCommon.switchCase(3, [[0, 2], [1, 3]]) => null
     */
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
})();
exports.default = utilCommon;
