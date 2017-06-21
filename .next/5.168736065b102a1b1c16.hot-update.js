webpackHotUpdate(5,{

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(39);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(574);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _header = __webpack_require__(626);

var _header2 = _interopRequireDefault(_header);

var _style3 = __webpack_require__(573);

var _style4 = _interopRequireDefault(_style3);

var _axios = __webpack_require__(576);

var _axios2 = _interopRequireDefault(_axios);

var _firebaseapp = __webpack_require__(627);

var _firebaseapp2 = _interopRequireDefault(_firebaseapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/clouduser/firebase/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'Shows',
    value: function Shows(props) {
      //console.log("props",props.message)
      // const listShows = props.shows.map((tv) =>
      //   <li key={ tv.show.id }>
      //     Title: { tv.show.name } | Score: { tv.score }
      //   </li>
      // );
      // return (
      //   <ul>{ listShows }</ul>
      // );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('div', { className: 'wrapper', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('title', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Index'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: _style4.default.__scopedHash,
        css: _style4.default.__scoped
      }), _react2.default.createElement(_style2.default, {
        styleId: _style3.globalcss.__hash,
        css: _style3.globalcss
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {};
                _context.next = 3;
                return new _promise2.default(function (resolve) {

                  var messagesRef = _firebaseapp2.default.database().ref('messages').orderByKey().limitToLast(100);

                  messagesRef.on('value', function (snapshot) {

                    data = { message: snapshot.val() };
                    console.log("message", data.message);
                    resolve();
                  });
                  //fireapp.database().ref('messages').push( "this is a test value 1111 0000"+Math.random() );
                });

              case 3:
                return _context.abrupt('return', { data: data.message });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/clouduser/firebase/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/clouduser/firebase/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xNjg3MzYwNjViMTAyYTFiMWMxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2xheW91dC9oZWFkZXInXG5pbXBvcnQgIHRlc3RkaXYsIHsgZ2xvYmFsY3NzIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBmaXJlYXBwIGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlYXBwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgICBsZXQgbWVzc2FnZXNSZWYgPSBmaXJlYXBwLmRhdGFiYXNlKCkucmVmKCdtZXNzYWdlcycpLm9yZGVyQnlLZXkoKS5saW1pdFRvTGFzdCgxMDApO1xuXG4gICAgICBtZXNzYWdlc1JlZi5vbigndmFsdWUnLCBzbmFwc2hvdCA9PiB7XG5cbiAgICAgICAgIGRhdGEgPSB7bWVzc2FnZTogc25hcHNob3QudmFsKCl9XG4gICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgZGF0YS5tZXNzYWdlKVxuICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KTtcbiAgICAgIC8vZmlyZWFwcC5kYXRhYmFzZSgpLnJlZignbWVzc2FnZXMnKS5wdXNoKCBcInRoaXMgaXMgYSB0ZXN0IHZhbHVlIDExMTEgMDAwMFwiK01hdGgucmFuZG9tKCkgKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtkYXRhOiBkYXRhLm1lc3NhZ2V9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcblxuXG4gIH1cbiBTaG93cyhwcm9wcykge1xuICAgLy9jb25zb2xlLmxvZyhcInByb3BzXCIscHJvcHMubWVzc2FnZSlcbiAgICAvLyBjb25zdCBsaXN0U2hvd3MgPSBwcm9wcy5zaG93cy5tYXAoKHR2KSA9PlxuICAgIC8vICAgPGxpIGtleT17IHR2LnNob3cuaWQgfT5cbiAgICAvLyAgICAgVGl0bGU6IHsgdHYuc2hvdy5uYW1lIH0gfCBTY29yZTogeyB0di5zY29yZSB9XG4gICAgLy8gICA8L2xpPlxuICAgIC8vICk7XG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgIDx1bD57IGxpc3RTaG93cyB9PC91bD5cbiAgICAvLyApO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+SW5kZXg8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8SGVhZGVyIC8+XG5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+eyB0ZXN0ZGl2IH08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPnsgZ2xvYmFsY3NzIH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBc0JBOzs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFiQTs7Ozs7Ozs7OztBQXBDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFYQTtBQUNBOztBQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWpCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==