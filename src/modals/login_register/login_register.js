import React, { Component } from 'react';
import './login_register.css';
import $ from 'jquery';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Modal, Button , Icon,Alert,Checkbox } from 'antd';
import { Login, Register,rememberMe } from '../../actions';
import {Translate} from 'react-localize-redux';
import store from '../../helpers/store';
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
            remember_me:false,
            login:true

        };
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.toggle();
    }


    handleCancel = () => {
        this.props.history.goBack()
        this.setState({
            visible: false,
        });
        store.getState().Login_Register.login.errors = []
        store.getState().Login_Register.register.errors = {}
    }

    componentWillReceiveProps(c) {
        this.setState({ open: c.modal });
    }


    login(e) {
        e.preventDefault();
        this.props.Login(this.state.username1,this.state.password1)
        setTimeout(() => {
            if(this.props.auth.status){ 
            this.props.history.goBack()
            this.setState({username1:'',password1:''})
            window.location.reload()
            }
        }, 3000);
    }

    register(e) {
        e.preventDefault();
        this.props.Register(this.state.username,this.state.email,this.state.password)
        setTimeout(() => {
            if(this.props.auth.status){ 
            this.toggle()
            this.setState({username:'',email:'',password:''});
            }
        }, 4000);
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
                    style={{ top: 30,direction:this.props.language==='ar'?'rtl':'' }}
                    title={this.state.login? <Translate id="header.login"/> :<Translate id="header.register"/>}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                        <div className="module form-module">
                            <div  className="toggle">
                            </div>
                            <div className="form">
                                <h3> <Translate id="header.login.title" /> </h3>
                                <form onSubmit={this.login} >
                                    <input type="text" name="username1" placeholder={this.props.language==='ar'?'اسم المستخدم':'Username'} value={this.state.username1} onChange={this.handleChange} required />
                                    <input type="password" name="password1" placeholder={this.props.language==='ar'?'كلمه السر':'Password'} value={this.state.password1} onChange={this.handleChange} required />
                                    <Checkbox style={{marginBottom:'15px'}} onChange={(e)=>{this.props.rememberMe(e.target.checked);console.log(e.target.checked)}} > {this.props.language==='ar'?'تذكرني':'Remember me'} </Checkbox>                                    
                                    {this.props.loading.Login===1?<div style={{textAlign:'center'}} > <Icon type="loading" style={{fontSize:'25px',color:'#04bafe'}} spin={true} /> </div>: <input type="submit" value={this.props.language==='ar'?'تسجيل الدخول':'Login' } />}
                                </form>
                               {this.props.login.errors.length>0 ?  <Alert showIcon style={{margin:'10px'}} closable message={this.props.login.errors} type="error" /> : '' }
                                <div onClick={() => { this.toggle() }}  className="cta">
                                    <a  ><Translate id="header.register"/></a>
                                </div>
                            </div>
                            <div className="form">
                                <h3> <Translate id="header.register.title" /> </h3>
                                <form onSubmit={this.register} >
                                    <input type="text" name="username" placeholder={this.props.language==='ar'?'اسم المستخدم':'Username'} value={this.state.username} onChange={this.handleChange}  required />
                                    <input type="password" name="password" placeholder={this.props.language==='ar'?'كلمه السر':'Password'} value={this.state.password} onChange={this.handleChange} min="8" required />
                                    <input type="email" name="email" placeholder={this.props.language==='ar'?'البريد الالكتروني':'Email'} value={this.state.email} onChange={this.handleChange}  required />
                                    {this.props.loading.Register===1?<div style={{textAlign:'center'}} >  <Icon type="loading" style={{fontSize:'25px',color:'#04bafe'}} spin={true} /> </div>: <input type="submit" value={this.props.language==='ar'?'التسجيل':'Register'} />}
                                </form>
                                {this.props.register.errors.email ?  <Alert showIcon style={{margin:'10px'}} closable message={<Translate id="msg.login.invalid.email"/>} type="error" /> : '' }
                                <div onClick={() => { this.toggle() }}  className="cta">
                                    <a ><Translate id="header.login"/></a>
                                </div>
                            </div>
                        </div>
                </Modal>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {loading: state.loadingBar,login:state.Login_Register.login,register:state.Login_Register.register,auth:state.Authentication,language:state.language.code};
}



export default connect(mapStateToProps, {Login,Register,rememberMe})(Login_register);