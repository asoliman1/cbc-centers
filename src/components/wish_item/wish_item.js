import React, { Component } from 'react';
import {Rate,Icon} from 'antd'
import './wish_item.css';
class Wish_item extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false }
    }

    render() {
        return (
            <li className="list-group-item" style={{ borderLeft: '6px solid red', width: '80%', margin: 'auto', marginBottom: '20px' }}  >

                <div className="media">
                    <div className="media-left">
                        <a href="">
                            <img className="media-object img-circle" src="/images/m1.jpg" alt="..." />
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="row" >
                            <div className="col-md-8" >
                                <h4 className="media-heading lead" >Media heading  </h4>
                            </div>
                            <div className="col-md-4 text-right" >

                                <button className="btn btn-light " style={{ fontSize: '11px' }} onClick={() => { this.setState({ liked: !this.state.liked }) }} >
                                    <i className={this.state.liked ? "fa fa-heart fa-2x fa-red" : "fa fa-heart-o fa-2x fa-red"} ></i>
                                </button>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <Rate allowHalf style={{ fontSize: 'large' }} disabled value={this.props.rate} />

                        <span>
                            <span className="ant-rate-text">{this.props.raters} <Icon type="user" /></span>
                        </span>
                        <footer className="text-right" >Date  <cite title="Source Title ">At : 12/2/2019</cite></footer>
                    </div>
                </div>
            </li>
        );
    }
}

export default Wish_item;