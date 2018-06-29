import React, { Component } from 'react';
import './shop_card.css';
import { Rate, Icon, Button, Row } from 'antd';
import { Link } from 'react-router-dom';
const ButtonGroup = Button.Group;

class Shop_card extends Component {
    render() {
        return (
            <li className="col-md-3 col-sm-6 col-xs-6 mtrl-f-grids ">
                <div className="fff">
                    <div className="thumbnail">
                        <a href="shop_single.html">
                            <img src="../images/mf3.jpg" alt="" />
                        </a>
                        <p>
                            <span className="fa fa-hand-o-down" aria-hidden="true"></span>{this.props.name}</p>
                    </div>
                    <div className="caption">
                        <h4>
                            {this.props.desc}
                        </h4>
                        <p>{this.props.instructor}</p>
                        <div className="matrlf-mid">
                            <h6>
                                <span>$</span> {this.props.price} </h6>
                            <span>
                                <span style={{ float: 'right' }} className="ant-rate-text">{this.props.raters} <Icon type="user" /></span>
                            </span>
                            <Rate allowHalf style={{ fontSize: 'small', float: 'right' }} disabled value={this.props.rate} />

                            <div className="clearfix"> </div>
                        </div>
                        <Row justify="center" type="flex" >
                            <ButtonGroup>
                                <Button style={{ color: 'white', background: '#04bafe', borderColor: 'white' }} ><Icon type="shopping-cart" /></Button>
                                <Button style={{ color: 'white', background: '#04bafe', borderColor: 'white' }}><Icon type="star-o" /></Button>
                                <Button type="dashed"><Link to={{ pathname: `/courses/${this.props.id}`, state: { course: this.props.course } }} > More <Icon type="ellipsis" /> </Link> </Button>
                            </ButtonGroup>
                        </Row>
                    </div>
                </div>
            </li>
        );

    }
}

export default Shop_card;