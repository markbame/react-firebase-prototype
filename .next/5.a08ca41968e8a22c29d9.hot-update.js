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
    value: function componentWillMount() {
      /* Create reference to messages in Firebase Database */
      var messagesRef = _firebaseapp2.default.database().ref('messages').orderByKey().limitToLast(100);
      //console.log("messageREF : ",fireapp.database().ref('messages'))
      //console.log("message from firebase server REF: ", messagesRef)
      messagesRef.on('child_added', function (snapshot) {
        //  console.log('snapshot',snapshot)
        /* Update React state when message is added at Firebase Database */
        var message = { text: snapshot.val(), id: snapshot.key, author: snapshot.val().author };
        console.log("message from", message);
        // snapshot.forEach(function(childSnapshot) {
        //   var childKey = childSnapshot.key;
        //   var childData = childSnapshot.val();
        //
        //   console.log("Key",childKey)
        //   console.log("Data",childData)
        // });
      });

      _firebaseapp2.default.database().ref('messages').push("this is a test value 1111 0000" + Math.random());
    }
  }, {
    key: 'Shows',
    value: function Shows(props) {
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
          lineNumber: 55
        }
      }, _react2.default.createElement('div', { className: 'wrapper', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('title', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Index'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('p', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Index Page!'), _react2.default.createElement(_style2.default, {
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
                  resolve();
                });

              case 3:
                return _context.abrupt('return', { data: data });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hMDhjYTQxOTY4ZThhMjJjMjlkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2xheW91dC9oZWFkZXInXG5pbXBvcnQgIHRlc3RkaXYsIHsgZ2xvYmFsY3NzIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBmaXJlYXBwIGZyb20gJy4uL3V0aWxzL2ZpcmViYXNlYXBwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSgpXG4gICAgfSlcbiAgICByZXR1cm4ge2RhdGF9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAvKiBDcmVhdGUgcmVmZXJlbmNlIHRvIG1lc3NhZ2VzIGluIEZpcmViYXNlIERhdGFiYXNlICovXG4gICAgbGV0IG1lc3NhZ2VzUmVmID0gZmlyZWFwcC5kYXRhYmFzZSgpLnJlZignbWVzc2FnZXMnKS5vcmRlckJ5S2V5KCkubGltaXRUb0xhc3QoMTAwKTtcbiAgICAvL2NvbnNvbGUubG9nKFwibWVzc2FnZVJFRiA6IFwiLGZpcmVhcHAuZGF0YWJhc2UoKS5yZWYoJ21lc3NhZ2VzJykpXG4gICAgLy9jb25zb2xlLmxvZyhcIm1lc3NhZ2UgZnJvbSBmaXJlYmFzZSBzZXJ2ZXIgUkVGOiBcIiwgbWVzc2FnZXNSZWYpXG4gICAgbWVzc2FnZXNSZWYub24oJ2NoaWxkX2FkZGVkJywgc25hcHNob3QgPT4ge1xuICAgIC8vICBjb25zb2xlLmxvZygnc25hcHNob3QnLHNuYXBzaG90KVxuICAgICAgLyogVXBkYXRlIFJlYWN0IHN0YXRlIHdoZW4gbWVzc2FnZSBpcyBhZGRlZCBhdCBGaXJlYmFzZSBEYXRhYmFzZSAqL1xuICAgICAgbGV0IG1lc3NhZ2UgPSB7IHRleHQ6IHNuYXBzaG90LnZhbCgpLCBpZDogc25hcHNob3Qua2V5LCBhdXRob3I6IHNuYXBzaG90LnZhbCgpLmF1dGhvciB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2UgZnJvbVwiLG1lc3NhZ2UpXG4gICAgICAgIC8vIHNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oY2hpbGRTbmFwc2hvdCkge1xuICAgICAgICAvLyAgIHZhciBjaGlsZEtleSA9IGNoaWxkU25hcHNob3Qua2V5O1xuICAgICAgICAvLyAgIHZhciBjaGlsZERhdGEgPSBjaGlsZFNuYXBzaG90LnZhbCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiS2V5XCIsY2hpbGRLZXkpXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJEYXRhXCIsY2hpbGREYXRhKVxuICAgICAgICAvLyB9KTtcblxuICAgIH0pXG5cbiAgXG4gICAgZmlyZWFwcC5kYXRhYmFzZSgpLnJlZignbWVzc2FnZXMnKS5wdXNoKCBcInRoaXMgaXMgYSB0ZXN0IHZhbHVlIDExMTEgMDAwMFwiK01hdGgucmFuZG9tKCkgKTtcbiAgfVxuIFNob3dzKHByb3BzKSB7XG4gICAgLy8gY29uc3QgbGlzdFNob3dzID0gcHJvcHMuc2hvd3MubWFwKCh0dikgPT5cbiAgICAvLyAgIDxsaSBrZXk9eyB0di5zaG93LmlkIH0+XG4gICAgLy8gICAgIFRpdGxlOiB7IHR2LnNob3cubmFtZSB9IHwgU2NvcmU6IHsgdHYuc2NvcmUgfVxuICAgIC8vICAgPC9saT5cbiAgICAvLyApO1xuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8dWw+eyBsaXN0U2hvd3MgfTwvdWw+XG4gICAgLy8gKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkluZGV4PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxwPkluZGV4IFBhZ2UhPC9wPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57IHRlc3RkaXYgfTwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+eyBnbG9iYWxjc3MgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQURBOzs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBYkE7Ozs7Ozs7Ozs7QUE1Q0E7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==