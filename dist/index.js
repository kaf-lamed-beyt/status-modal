"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _status = _interopRequireDefault(require("./style/status.scss"));

var _bs = require("react-icons/bs");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Status = _ref => {
  let {
    message,
    status
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "(".concat(_status.default.default, " ").concat(status === "error" ? _status.default.error : "", ")")
  }, /*#__PURE__*/_react.default.createElement("p", null, message), status !== "error" ? /*#__PURE__*/_react.default.createElement(_bs.BsCheck2All, null) : /*#__PURE__*/_react.default.createElement(_md.MdWifiThetheringRounded, null));
};

exports.Status = Status;
_propTypes.default.Status = {
  message: _propTypes.default.string.isRequired,
  status: _propTypes.default.string
};