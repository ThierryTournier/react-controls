"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const BaseDateComponent = (props) => {
    const { className } = props;
    return React.createElement("textarea", { type: "text", className: className, onChange: this.onChange });
};
const base = props => styled_components_1.css `
`;
const error = props => styled_components_1.css `
  border : 1px solid red;
`;
exports.BaseTextStyle = styled_components_1.default(BaseDateComponent) `
${(props) => base(props)}
${(props) => props.hasError ? error(props) : styled_components_1.css ``}
`;
class TextStyle extends React.Component {
    render() {
        const _a = this.props, { children } = _a, rest = __rest(_a, ["children"]);
        return (React.createElement("div", null,
            React.createElement(exports.BaseTextStyle, Object.assign({}, rest)),
            children));
    }
}
TextStyle.defaultProps = {
    hasError: false,
    onChange: (event) => { }
};
exports.default = TextStyle;
//# sourceMappingURL=styles.js.map