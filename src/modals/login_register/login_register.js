import React, { Component } from 'react';
import './login_register.css';
import $ from 'jquery';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Modal, Button , Icon,Alert } from 'antd';
import { Login, Register } from '../../actions';

class Login_register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            visible: true,
            email:'',
            username:'',
            password:'',
            username1:'',
            password1:'',
            login:true

        };
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.toggle();
        console.log(this.props)
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
        this.setState({ open: c.modal });

    }


    login(e) {
        e.preventDefault();
        this.props.Login(this.state.username1,this.state.password1)
        setTimeout(() => {
            if(this.props.auth.status)
            this.props.history.goBack()
        }, 2000);
    }

    register(e) {
        e.preventDefault();
        this.props.Register(this.state.username,this.state.email,this.state.password)
        setTimeout(() => {
            if(this.props.auth.status)
            this.props.history.goBack()
        }, 2000);
    }


    toggle() {
        this.setState({login:!this.state.login})
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

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }


    render() {
        const { visible, confirmLoading } = this.state;

        return (

            <div>

                <Modal 
                    visible={visible}
                    style={{ top: 30 }}
                    title={this.state.login?'Login':'Signup'}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                        <div className="module form-module">
                            <div onClick={() => { this.toggle() }} className="toggle">
                                <i className="fa fa-times fa-pencil"></i>
                                <div className="tooltip">{this.state.login?'Signup':'Login'}</div>
                            </div>
                            <div className="form">
                                <h3>Login to your account</h3>
                                <form onSubmit={this.login} >
                                    <input type="text" name="username1" placeholder="Username" value={this.state.username1} onChange={this.handleChange} required />
                                    <input type="password" name="password1" placeholder="Password" value={this.state.password1} onChange={this.handleChange} required />
                                    {this.props.loading.Login===1?<div style={{textAlign:'center'}} > <Icon type="loading" style={{fontSize:'25px',color:'#04bafe'}} spin={true} /> </div>: <input type="submit" value="Login" />}
                                </form>
                               {this.props.login.errors.length>0 ?  <Alert showIcon style={{margin:'10px'}} closable message={this.props.login.errors} type="error" /> : '' }
                                <div className="cta">
                                    <a >Forgot your password?</a>
                                </div>
                            </div>
                            <div className="form">
                                <h3>Create an account</h3>
                                <form onSubmit={this.register} >
                                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}  required />
                                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} min="8" required />
                                    <input type="email" name="email" placeholder="Email address" value={this.state.email} onChange={this.handleChange}  required />
                                    {this.props.loading.Register===1?<div style={{textAlign:'center'}} >  <Icon type="loading" style={{fontSize:'25px',color:'#04bafe'}} spin={true} /> </div>: <input type="submit" value="Register" />}
                                </form>
                                {this.props.register.errors.email ?  <Alert showIcon style={{margin:'10px'}} closable message={this.props.register.errors.email} type="error" /> : '' }
                            </div>
                        </div>
                </Modal>

            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {loading: state.loadingBar,login:state.Login_Register.login,register:state.Login_Register.register,auth:state.Authentication};
}



export default connect(mapStateToProps, {Login,Register})(Login_register);