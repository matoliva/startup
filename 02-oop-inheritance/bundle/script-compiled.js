
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(fullName, age) {
    _classCallCheck(this, Actor);

    this.fullName = fullName;
    this.age = age;
};

var EventEmmiter = function () {
    function EventEmmiter() {
        _classCallCheck(this, EventEmmiter);

        this.events = {}; //object of events
    }

    _createClass(EventEmmiter, [{
        key: 'on',
        value: function on(eventName, callback) {
            if (this.events[eventName]) {
                this.events[eventName].push(callback);
            } else {
                this.events[eventName] = [callback];
            }
        }
    }, {
        key: 'emit',
        value: function emit(eventName) {
            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                rest[_key - 1] = arguments[_key];
            }

            if (this.events[eventName]) {
                this.events[eventName].forEach(function (cb) {
                    cb.apply(null, rest);
                });
            }
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            if (this.events.has(eventName)) {
                var listenerList = this.eventList.get(eventName);
                listenerList.delete(callback);
            }
        }
    }]);

    return EventEmmiter;
}();

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: 'log',
        value: function log(info) {
            console.log('The ' + this.info + ' event has been emitted');
        }
    }]);

    return Logger;
}();

var Movie = function (_EventEmmiter) {
    _inherits(Movie, _EventEmmiter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'play');
        }
    }, {
        key: 'pause',
        value: function pause() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'pause');
        }
    }, {
        key: 'resume',
        value: function resume() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'resume');
        }
    }, {
        key: 'addCast',
        value: function addCast(actor) {
            var _this2 = this;

            if (Array.isArray(actor)) {
                actor.forEach(function (auxCast) {
                    return _this2.cast.push(auxCast);
                });
            } else {
                this.cast.push(actor);
            }
        }
    }]);

    return Movie;
}(EventEmmiter);

exports.default = Movie;
var Social = exports.Social = {

    share: function share(friendName) {
        console.log(friendName + ' likes ' + this.title);
    },
    like: function like(friendName) {
        console.log(friendName + ' shares ' + this.title);
    }
};