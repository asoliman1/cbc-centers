import React, { Component } from 'react';
import "./signup_news.css";
class Signup_news extends Component {
    render() {
        return (
            <div className="wthree-subscribef-w3ls">
            <div className="container">
                <h3 className="tittlef-agileits-w3layouts white-clrf">Sign up for our Newsletter</h3>
                <p className="white-clrf">Recieve our latest news straight to your inbox</p>
                <div className="footer_w3layouts_gridf_right">

                    <form >
                        <input type="email" name="Email" placeholder="Email address..." required />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Signup_news;