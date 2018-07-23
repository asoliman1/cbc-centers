import React, { Component } from 'react';
import {Rate,Icon} from 'antd'
import './wish_item.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    removeWishlist
} from '../../actions'
class Wish_item extends Component {

    constructor(props) {
        super(props);
        this.state = { liked: false }
        console.log(this.props)
    }

    render() {
        return (
            <li className="list-group-item animated fadeIn" style={{ borderLeft: '6px solid red', width: '80%', margin: 'auto', marginBottom: '20px' }}  >

                <div className="media">
                    <div className="media-left">
                        <Link to={{pathname:`/courses/${this.props.course}`}} >
                            <img className="media-object img-circle" src={this.props.x.image?this.props.x.image:'./images/error.jpg'} onError={(e) => { e.target.src = './images/error.jpg' }}  alt={this.props.x.e_name} />
                        </Link>
                    </div>
                    <div className="media-body">
                        <div className="row" >
                        <Link to={{pathname:`/courses/${this.props.course}`}} >

                            <div className="col-md-8" >
                                <h4 className="media-heading lead" > {this.props.x.name_e}  </h4>
                            </div>
                            </Link>
                            <div className="col-md-4 text-right" >

                                <button className="btn btn-light " style={{ fontSize: '11px' }} onClick={() => { this.props.removeWishlist(this.props.id) }} >
                                    <i className={ "fa fa-trash fa-2x fa-red"} ></i>
                                </button>
                            </div>
                        </div>
                        
                        <p> {this.props.x.short_desc_e} </p>
                        <Rate allowHalf style={{ fontSize: 'large' }} disabled value={this.props.x.total_rating} />

                        <span>
                            <span className="ant-rate-text">{this.props.x.total_raters} <Icon type="user" /></span>
                        </span>
                        <footer className="text-right" >Date  <cite title="Source Title ">At : 12/2/2019</cite></footer>
                    </div>
                </div>
            </li>
        );
    }
}

function mapStateToProps(state){
    return { loading:state }
}

export default  connect(mapStateToProps,{removeWishlist})(Wish_item);