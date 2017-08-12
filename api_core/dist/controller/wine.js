'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _wine = require('../model/wine');

var _wine2 = _interopRequireDefault(_wine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    // CRUD

    //coffee/add
    api.post('/add', function (req, res) {
        var newWine = new _wine2.default();
        newWine.name = req.body.name;
        newWine.type = req.body.type;
        newWine.year = req.body.year;
        newWine.winery = req.body.winery;

        newWine.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Wine Upload successfully' });
        });
    });

    // Wine-READ
    api.get('/', function (req, res) {
        _wine2.default.find({}, function (err, wines) {
            if (err) {
                res.send(err);
            }
            res.json(wines);
        });
    });

    api.get('/:id', function (req, res) {
        _wine2.default.findById(req.params.id, function (err, wine) {
            if (err) {
                res.send(err);
            }
            res.json(wine);
        });
    });

    // v1/coffee/:id - update
    api.put('/:id', function (req, res) {
        _wine2.default.findById(req.params.id, function (err, Wine) {
            if (err) {
                res.send(err);
            }
            wine.name = req.body.name;
            wine.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'wine information update' });
            });
        });
    });
    api.delete('/:id', function (req, res) {
        _wine2.default.remove({
            _id: req.params.id
        }, function (err, wine) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Wine Removed' });
        });
    });
    return api;
};
//# sourceMappingURL=wine.js.map