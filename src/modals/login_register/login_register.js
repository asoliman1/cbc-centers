import React, { Component } from 'react';
import './login_register.css';
import $ from 'jquery';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';

class Login_register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            visible: true
        };
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.toggle();
    }


    handleCancel = () => {
        console.log('Clicked cancel button');
        this.props.history.goBack()
        this.setState({
            visible: false,
        });
    }

    componentWillReceiveProps(c) {
        console.log(c);
        this.setState({ open: c.modal })
    }


    login(e) {
        e.preventDefault();
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.props.history.goBack()
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        localStorage.setItem('api_token', 'done')
        }, 1000);
    }

    register(e) {
        e.preventDefault();
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.props.history.goBack()
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        localStorage.setItem('api_token', 'done')
        }, 1000);
    }


    toggle() {
        // Switches the Icon
        $(this).children('i').toggleClass('fa-pencil');
        // Switches the forms  
        $('.form').animate({
            height: "toggle",
            'padding-top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: "toggle"
        }, "slow");
    }


    render() {
        const { visible, confirmLoading } = this.state;

        return (

            <div>

                <Modal title=" Sign In & Sign Up"
                    visible={visible}
                    style={{ top: 160 }}
                    footer={null}
                    closable
                    maskClosable
                    onCancel={this.handleCancel}
                >
                        <div className="module form-module">
                            <div onClick={() => { this.toggle() }} className="toggle">
                                <i className="fa fa-times fa-pencil"></i>
                                <div className="tooltip">Click Me</div>
                            </div>
                            <div className="form">
                                <h3>Login to your account</h3>
                                <form onSubmit={this.login} >
                                    <input type="text" name="Username" placeholder="Username" required />
                                    <input type="password" name="Password" placeholder="Password" required />
                                    <input type="submit" value="Login" />
                                </form>
                                <div className="cta">
                                    <a >Forgot your password?</a>
                                </div>
                            </div>
                            <div className="form">
                                <h3>Create an account</h3>
                                <form onSubmit={this.register} >
                                    <input type="text" name="Username" placeholder="Username" required />
                                    <input type="password" name="Password" placeholder="Password" required />
                                    <input type="email" name="Email" placeholder="Email address" required />
                                    <input type="text" name="Phone" placeholder="Phone Number" required />
                                    <input type="submit" value="Register" />
                                </form>
                            </div>
                        </div>
                </Modal>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {};
}



export default connect(mapStateToProps, {})(Login_register);