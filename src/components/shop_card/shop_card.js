import React, { Component } from 'react';
import './shop_card.css';
import { Rate, Icon, Button, Row, Spin, Popover, Radio, Input } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    addShopCart,
    addWishList,
    removeWishlist,
    getCourseRounds
} from '../../actions'
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

class Shop_card extends Component {
    constructor(props) {
        super(props);
        this.state = { loading_shop: false, loading_wish: false, value: 1, visible: false, rounds: [] }
    }

    addShopCart(e) {
        this.setState({ loading_shop: true })
        this.props.addShopCart("1", this.props.id, this.props.price, new Date().toDateString())
        setTimeout(() => { this.setState({ loading_shop: false }) }, 5000)
    }

    addWishList(e) {
        this.setState({ loading_wish: true })
        this.props.addWishList(this.props.id)
        setTimeout(() => { this.setState({ loading_wish: false }) }, 5000)
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
        this.hide()
        console.log(e.target.value.price)
        this.props.addShopCart(e.target.value.price,this.props.id,e.target.value.id)
    }

    hide = () => {
        this.setState({
            visible: false,
        });
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
        if (visible) {
            if (this.props.rounds.filter(e => e.course === this.props.id).length === 0)
                this.props.getCourseRounds(this.props.id)
        }
    }


    render() {
        const rounds = this.props.rounds.filter(e => e.course === this.props.id)

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const content = (
            <div>
                {/* onClick={(e) => { this.addShopCart(e) }} */}
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    {rounds.splice(0,4).map(e => {
                        return <div style={{padding:'6px'}} ><Radio className="animated fadeIn" style={radioStyle} value={e}> <span style={{whiteSpace:'nowrap',width:'120px',overflow:'hidden',float:'right'}} > {e.name_e} </span></Radio> 
                            {e.start_date } - {e.end_date} <br/>
                            {e.price} $
                        </div>
                    })}
                </RadioGroup>
                {this.props.loading.getCourseRounds === 1 && rounds.length === 0 ? <div style={{ textAlign: 'center', padding: '20px' }} > <Icon type="loading" style={{ color: '#04bafe', textAlign: 'center', fontSize: '20px' }} spin /> </div> : rounds.length === 0 ? <div style={{ textAlign: 'center', padding: '20px' }} >No rounds found</div> : ''}
            </div>
        );

        return (
            <li className="col-md-3 col-sm-6 col-xs-6 mtrl-f-grids animated fadeIn">
                <div className="fff">
                    <div className="thumbnail">
                        <a >
                            <img height="255px" width="255px" src={this.props.image?this.props.image:'./images/error.jpg'} onError={(e) => { e.target.src = './images/error.jpg' }} alt={this.props.name} />
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
                            <ButtonGroup  >
                                <Popover
                                    trigger="click"
                                    onVisibleChange={this.handleVisibleChange}
                                    content={content} visible={this.state.visible} title="Choose course round">
                                    <Button className="hvr-bounce-in" style={{ borderColor: 'white' }}  > {this.state.loading_shop && this.props.loading.addShopCart === 1 ? <Icon type="loading" style={{ color: 'white' }} spin /> : <Icon style={{fontSize:'20px'}} type="shopping-cart" />}  </Button>
                                </Popover>
                                <Button className="hvr-bounce-in" style={{  borderColor: 'white' }} onClick={(e) => { this.addWishList(e) }} > {this.state.loading_wish && this.props.loading.addWishList === 1 ? <Icon type="loading" style={{ color: 'red',fontSize:'20px' }} spin /> : <Icon style={{fontSize:'20px',color:'red'}} type="heart-o" />}  </Button>
                                <Button className="hvr-bounce-in" style={{  borderColor: 'white' }} ><Link to={{ pathname: `/courses/${this.props.id}`, state: { course: this.props.course } }} >  <Icon style={{ fontWeight: 'bold',fontSize:'20px' }} type="ellipsis" /> </Link> </Button>
                            </ButtonGroup>
                        </Row>
                    </div>
                </div>
            </li>
        );

    }

}
function mapStateToProps(state) {
    return { loading: state.loadingBar, auth: state.Authentication, rounds: state.shop_cart.rounds };
}

export default connect(mapStateToProps, {
    addShopCart,
    addWishList,
    removeWishlist,
    getCourseRounds
})(Shop_card);