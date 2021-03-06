"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sensor = (function () {
    function Sensor(id, type) {
        this.id = id;
        this.type = type;
    }
    return Sensor;
}());
exports.Sensor = Sensor;
var BinarySensor = (function (_super) {
    __extends(BinarySensor, _super);
    function BinarySensor(id, type, state) {
        var _this = _super.call(this, id, type) || this;
        _this.state = state;
        return _this;
    }
    return BinarySensor;
}(Sensor));
exports.BinarySensor = BinarySensor;
var MultiLevelSensor = (function (_super) {
    __extends(MultiLevelSensor, _super);
    function MultiLevelSensor(id, type, value) {
        var _this = _super.call(this, id, type) || this;
        _this.value = value;
        return _this;
    }
    return MultiLevelSensor;
}(Sensor));
exports.MultiLevelSensor = MultiLevelSensor;
var MeterSensor = (function (_super) {
    __extends(MeterSensor, _super);
    function MeterSensor(id, type, currentValue, totalValue, sinceTime) {
        var _this = _super.call(this, id, type) || this;
        _this.currentValue = currentValue;
        _this.totalValue = totalValue;
        _this.sinceTime = sinceTime;
        return _this;
    }
    return MeterSensor;
}(Sensor));
exports.MeterSensor = MeterSensor;
var BinarySwitch = (function (_super) {
    __extends(BinarySwitch, _super);
    function BinarySwitch(id, type, state, targetState) {
        var _this = _super.call(this, id, type, state) || this;
        _this.targetState = targetState;
        return _this;
    }
    return BinarySwitch;
}(BinarySensor));
exports.BinarySwitch = BinarySwitch;
var MultiLevelSwitch = (function (_super) {
    __extends(MultiLevelSwitch, _super);
    function MultiLevelSwitch(id, type, value, targetValue, min, max) {
        var _this = _super.call(this, id, type, value) || this;
        _this.targetValue = targetValue;
        _this.min = min;
        _this.max = max;
        return _this;
    }
    return MultiLevelSwitch;
}(MultiLevelSensor));
exports.MultiLevelSwitch = MultiLevelSwitch;
