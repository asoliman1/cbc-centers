import React, { Component } from 'react';
import { Rate, Icon } from 'antd';
import './search_item.css';
import { connect } from 'react-redux';
import { Button, Radio ,Popover} from 'antd';
import {Link} from 'react-router-dom'
import {
    addShopCart,
    addWishList,
    getCourseRounds
} from '../../actions'
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
class Search_item extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: 3.3, liked: false }
        console.log(this.props)
        
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
        this.hide()
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

    componentWillReceiveProps(e){
    }

    render() {
        const rounds = this.props.rounds.filter(e => e.course === this.props.id)
        const category = this.props.categories.filter(e=>e.id===this.props.category.category)
        const category_name = category.length>0 ? category[0] : {}
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
            <div className="animated fadeIn" >

                <li className="list-group-item" style={{ borderLeft: '6px solid black', width: '80%', margin: 'auto', marginBottom: '20px' }} >
                    <div className="media">
                        <div className="media-left">
                          <Link to={{pathname:`/course_main/${this.props.id}`}} >
                                <img className="media-object img-rounded" height="140px" width="140px" src={this.props.image?this.props.image:'./images/error.jpg'} alt={this.props.name} />
                           </Link>
                        </div>
                        <div className="media-body">
                        <Link to={{pathname:`/courses/${this.props.id}`}} >

                            <h4 className="media-heading lead">{this.props.name}</h4>
                            </Link>
                            <div className="row" >
                          <Link to={{pathname:`/course_main/${this.props.id}`}} >
                                <div className="col-md-8">
                                    <p style={{marginBottom:'5px'}} >{this.props.desc}</p>
                                    <span className="ant-rate-text"> {category_name.attr1} </span> <br/>
                                    <Rate  allowHalf style={{ fontSize: 'large' }} disabled value={this.props.rate} />
                                
                                        <span style={{marginBottom:'5px'}} className="ant-rate-text">{this.props.raters} <Icon type="user" /></span>
                                     <br/> 
                                  
                                    <span  >
                                        <span className="ant-rate-text">$ {this.props.price} </span>
                                    </span>
                                    
                                </div>
                                </Link>

                                <div className="col-md-4 text-right" >
                                    <button className="btn btn-light" style={{ fontSize: '11px' }} onClick={() => {this.props.addWishList(this.props.id);this.setState({liked:true}) }} >
                                        <i className={this.state.liked ? "fa fa-heart fa-2x fa-red" : "fa fa-heart-o fa-2x fa-red"} ></i>
                                    </button>
                                    <Popover
                                    trigger="click"
                                    onVisibleChange={this.handleVisibleChange}
                                    content={content} visible={this.state.visible} title="Choose course round">
                                    <button className="btn btn-light" style={{ fontSize: '11px' }} >
                                        <i className={ "fa fa-shopping-cart fa-2x fa-red" } ></i>
                                    </button>
                                </Popover>
                                 
                                </div>
                            </div>


                        </div>
                        <footer className="text-right" >- <cite title="Source Title">{this.props.creation_date}</cite></footer>

                    </div>
                </li>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {rounds:state.shop_cart.rounds,loading:state.loadingBar,categories:state.header.categories}
}

export default connect(mapStateToProps,{ addShopCart,
    addWishList,
    getCourseRounds}) (Search_item);