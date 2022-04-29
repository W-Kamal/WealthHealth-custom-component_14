"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("react"));!function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".modal-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #000;\r\n  opacity: .5;\r\n}\r\n\r\n.modal-wrapper {\r\n  position: fixed;\r\n  top: 25%;\r\n  left: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  outline: 0;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  z-index: 1;\r\n  background: #f3e4c3;\r\n  position: relative;\r\n  margin: 1.75rem auto;\r\n  border-radius: 3px;\r\n  max-width: 500px;\r\n  padding: 2rem;\r\n}\r\n\r\n.modal-close-button {\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: #000;\r\n  opacity: .3;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.modal-text {\r\n  font-size: large;\r\n  font-weight: 600;\r\n  color: #6E8510;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  font-size: .9rem;\r\n  font-weight: 700;\r\n  border: none;\r\n  border-radius: 3px;\r\n  padding: .3rem 1rem;\r\n  margin-left: .5rem;\r\n}\r\n\r\n.button-default {\r\n  background: #33d3c1;\r\n  color: #fff;\r\n}");exports.Modal=({component:e,closeAction:r,clickOutsideAction:t})=>n.default.createElement("div",{onClick:t},n.default.createElement("div",{className:"modal-overlay"}),n.default.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},n.default.createElement("div",{className:"modal"},e,n.default.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:r},n.default.createElement("span",{"aria-hidden":"true"},"×")))));
