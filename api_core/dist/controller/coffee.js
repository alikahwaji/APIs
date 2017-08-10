'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _coffee = require('../model/coffee');

var _coffee2 = _interopRequireDefault(_coffee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    // CRUD


    //coffee/add
    api.post('/add', function (req, res) {
        var newCoffee = new _coffee2.default();
        newCoffee.name = req.body.name;

        newCoffee.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Coffee Upload successfully' });
        });
    });

    // /coffee -READ
    api.get('/', function (req, res) {
        _coffee2.default.find({}, function (err, coffees) {
            if (err) {
                res.send(err);
            }
            res.json(coffees);
        });
    });

    api.get('/:id', function (req, res) {
        _coffee2.default.findById(req.params.id, function (err, coffee) {
            if (err) {
                res.send(err);
            }
            res.json(coffee);
        });
    });

    // v1/coffee/:id - update
    api.put('/:id', function (req, res) {
        _coffee2.default.findById(req.params.id, function (err, coffee) {
            if (err) {
                res.send(err);
            }
            coffee.name = req.body.name;
            coffee.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Coffee information update' });
            });
        });
    });
    return api;
};
//# sourceMappingURL=coffee.js.map