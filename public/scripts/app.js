'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log("Hi1");
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.addOption = _this.addOption.bind(_this);
        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var options = JSON.parse(localStorage.getItem('options'));
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'deleteOptions',
        value: function deleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            return "Tu opcion es: " + this.state.options[Math.floor(Math.random() * this.state.options.length)];
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return "Ingresar una opcion valida";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Esta opcion ya fue ingresada";
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'removeOption',
        value: function removeOption(optionToRemove) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    }) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    options: this.state.options,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    removeOption: this.removeOption,
                    deleteOptions: this.deleteOptions,
                    hasOptions: this.state.options.length > 0,
                    options: this.state.options

                }),
                React.createElement(AddOptions, {
                    addOption: this.addOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        'AAAAAAA',
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );

    Header.defaultProps = {
        subtitle: 'Let a computer decide',
        title: "Indecision"
    };
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.deleteOptions },
            'Remove all options'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to start'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                textOption: option,
                removeOption: props.removeOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.textOption,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    props.removeOption(props.textOption);
                } },
            'x'
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim(),
                error = this.props.addOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));