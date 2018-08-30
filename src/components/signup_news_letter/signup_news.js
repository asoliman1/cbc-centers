import React, { Component } from 'react';
import "./signup_news.css";
import {Translate} from 'react-localize-redux'; 
import {connect} from 'react-redux';
class Signup_news extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="wthree-subscribef-w3ls" >
            <div className="container" style={{direction:this.props.language==='ar'?'rtl':''}} >
                <h3 className="tittlef-agileits-w3layouts white-clrf" style={{textAlign:this.props.language==='ar'?'right':''}} > <Translate id="signup.for.newsletter" /> </h3>
                <p className="white-clrf"> <Translate id="news.letter.details" /> </p>
                <div className="footer_w3layouts_gridf_right">

                    <form >
                        <input type="email" name="Email" placeholder={this.props.language==='ar'?'البريد الالكتروني':'Email address' } required />
                        <input type="submit" value={this.props.language==='ar'?'تسجيل':'Submit'} />
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {language:state.language.code}
}

export default connect(mapStateToProps,{})(Signup_news);