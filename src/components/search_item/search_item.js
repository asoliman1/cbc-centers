import React, { Component } from 'react';
import { Rate, Icon } from 'antd';
import './search_item.css';
class Search_item extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: 3.3, liked: false }
    }

    render() {
        return (
            <div>

                <li className="list-group-item" style={{ borderLeft: '6px solid black', width: '80%', margin: 'auto', marginBottom: '20px' }} >
                    <div className="media">
                        <div className="media-left">
                            <a >
                                <img className="media-object img-rounded" height="140px" width="140px" src="images/m1.jpg" alt="..." />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading lead">{this.props.name}</h4>
                            <div className="row" >
                                <div className="col-md-8">
                                    <p className="" >{this.props.desc}</p>
                                    <Rate allowHalf style={{ fontSize: 'large' }} disabled value={this.props.rate} />

                                    <span>
                                        <span className="ant-rate-text">{this.props.raters} <Icon type="user" /></span>
                                    </span>
                                </div>
                                <div className="col-md-4 text-right" >
                                    <button className="btn btn-light" style={{ fontSize: '11px' }} onClick={() => { this.setState({ liked: !this.state.liked }) }} >
                                        <i className={this.state.liked ? "fa fa-heart fa-2x fa-red" : "fa fa-heart-o fa-2x fa-red"} ></i>
                                    </button>
                                </div>
                            </div>


                        </div>
                        <footer className="text-right" >- <cite title="Source Title">{this.props.instructor}</cite></footer>

                    </div>
                </li>
            </div>
        );
    }
}

export default Search_item;