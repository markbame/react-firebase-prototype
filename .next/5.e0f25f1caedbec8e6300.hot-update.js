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

var _keys = __webpack_require__(234);

var _keys2 = _interopRequireDefault(_keys);

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

      (0, _keys2.default)(props.data).forEach(function (key) {
        console.log("key", props.data[key]);
      });
      var listShows = (0, _keys2.default)(props.data).map(function (key) {
        return _react2.default.createElement('li', { key: key, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, 'Message: ', props.data[key]);
      });
      return _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, listShows);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', { className: 'wrapper', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('title', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Index'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), this.Shows(this.props), _react2.default.createElement(_style2.default, {
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
                    data = { message: snapshot.val()
                      //console.log("message", data.message)
                    };resolve();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMGYyNWYxY2FlZGJlYzhlNjMwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2xheW91dC9oZWFkZXInXG5pbXBvcnQgIHRlc3RkaXYsIHsgZ2xvYmFsY3NzIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZmlyZWFwcCBmcm9tICcuLi91dGlscy9maXJlYmFzZWFwcCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIHZhciBkYXRhID0ge307XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblxuICAgICAgbGV0IG1lc3NhZ2VzUmVmID0gZmlyZWFwcC5kYXRhYmFzZSgpLnJlZignbWVzc2FnZXMnKS5vcmRlckJ5S2V5KCkubGltaXRUb0xhc3QoMTAwKTtcblxuICAgICAgbWVzc2FnZXNSZWYub24oJ3ZhbHVlJywgc25hcHNob3QgPT4ge1xuICAgICAgICAgZGF0YSA9IHttZXNzYWdlOiBzbmFwc2hvdC52YWwoKX1cbiAgICAgICAgIC8vY29uc29sZS5sb2coXCJtZXNzYWdlXCIsIGRhdGEubWVzc2FnZSlcbiAgICAgICAgIHJlc29sdmUoKVxuICAgICAgfSk7XG4gICAgICAvL2ZpcmVhcHAuZGF0YWJhc2UoKS5yZWYoJ21lc3NhZ2VzJykucHVzaCggXCJ0aGlzIGlzIGEgdGVzdCB2YWx1ZSAxMTExIDAwMDBcIitNYXRoLnJhbmRvbSgpICk7XG4gICAgfSlcblxuICAgIHJldHVybiB7ZGF0YTogZGF0YS5tZXNzYWdlfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG5cblxuICB9XG4gU2hvd3MocHJvcHMpIHtcblxuICAgT2JqZWN0LmtleXMocHJvcHMuZGF0YSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBjb25zb2xlLmxvZyhcImtleVwiLCBwcm9wcy5kYXRhW2tleV0pO1xuICAgfSk7XG4gICAgY29uc3QgbGlzdFNob3dzID0gT2JqZWN0LmtleXMocHJvcHMuZGF0YSkubWFwKChrZXkpID0+XG4gICAgICA8bGkga2V5PXsga2V5IH0+XG4gICAgICAgIE1lc3NhZ2U6IHsgcHJvcHMuZGF0YVtrZXldIH1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPnsgbGlzdFNob3dzIH08L3VsPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5JbmRleDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIHt0aGlzLlNob3dzKHRoaXMucHJvcHMpfVxuICAgICAgICAgIDxzdHlsZSBqc3g+eyB0ZXN0ZGl2IH08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPnsgZ2xvYmFsY3NzIH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQXFCQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFLQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBWEE7Ozs7Ozs7Ozs7QUF0Q0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQVZBO0FBQ0E7O0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaEJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9