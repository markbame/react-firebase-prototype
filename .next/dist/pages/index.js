'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../layout/header');

var _header2 = _interopRequireDefault(_header);

var _style3 = require('../style/style');

var _style4 = _interopRequireDefault(_style3);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _firebaseapp = require('../utils/firebaseapp');

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