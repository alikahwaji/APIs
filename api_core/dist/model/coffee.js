'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var coffeeSchema = new Schema({
    name: String
});

module.exports = _mongoose2.default.model('Coffee', coffeeSchema);
//# sourceMappingURL=coffee.js.map