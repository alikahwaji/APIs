'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _wine = require('../controller/wine');

var _wine2 = _interopRequireDefault(_wine);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
//connect to db

(0, _db2.default)(function (db) {

    // internal middleware
    app.use((0, _middleware2.default)({ config: _config2.default, db: db }));

    //api routes v1 
    app.use('/wine', (0, _wine2.default)({ config: _config2.default, db: db }));
});

exports.default = app;
//# sourceMappingURL=index.js.map