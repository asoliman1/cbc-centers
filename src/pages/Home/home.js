import React, { Component } from 'react';
import './home.css';
import Shop_card from '../../components/shop_card/shop_card';
import Courses_type from '../../components/courses_type/courses_type';
import { Tabs, Card, Carousel, Col, Row ,Button} from 'antd';
import { connect } from 'react-redux';
import { Translate } from "react-localize-redux";

import {
    homeCatItems,
    homeNewCourses,
    homeOffCourses,
    homePopCourses,
    homeRatCourses,
    homeCatList,
    homeEventNotif,
    homeSlider,
    searchByfilters,
    homeWishlist
} from '../../actions'
const TabPane = Tabs.TabPane;

class home extends Component {

    constructor(props) {
        super(props)
        this.state={current_tab:this.props.language === 'ar' ? (this.props.categories.length -1)+'' :'0'}
        this.callback = this.callback.bind(this)
    }

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        // this.props.homeSlider();
        // this.props.homeEventNotif();
        if(this.props.courses.popular.results.length===0)
        this.props.homePopCourses('1', '4');
        if(this.props.courses.offers.results.length===0)
        this.props.homeOffCourses('1', '4');
        if(this.props.courses.rated.results.length===0)
        this.props.homeRatCourses('1', '4');
        if(this.props.courses.new.results.length===0)
        this.props.homeNewCourses('1', '4');
    }

    callback(key) {
        this.setState({current_tab:key})
        this.props.homeCatList(this.props.categories[key].id)
    }


    render() {

        return (
            <div>
                <div>
                        <Carousel rtl={this.props.language==='ar'?true:false} className="animated fadeIn" pauseOnHover swipe swipeToSlide autoplay>
                            <div><img height="100%" width="100%" src="./images/banner1.jpg" /></div>
                            <div><img height="100%" width="100%" src="./images/banner2.jpg" /></div>
                            <div><img height="100%" width="100%" src="./images/banner3.jpg" /></div>
                            <div><img height="100%" width="100%" src="./images/banner4.jpg" /></div>
                            <div><img height="100%" width="100%" src="./images/banner5.jpg" /></div>
                        </Carousel>

                    <div className="aboutf">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts"> <Translate id="home.title.popular" />  </h3>
                            <p className="paragraphf"></p>
                        </div>



                        <Tabs activeKey={this.state.current_tab} onChange={this.callback} animated={true} tabBarStyle={{ display: 'flex', justifyContent: 'space-around' }} tabBarGutter={110} size="large" type="card">
                            {this.props.categories.map((e,i) => {
                                return <TabPane tab={ this.props.language==='ar'? e.attr2:e.attr1} key={i} >

                                    {this.props.loading.homecat === 1 ?
                                        <Row style={{ marginLeft:'60px',marginRight:'60px' }} gutter={16}>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                        </Row>
                                        :

                                        <div style={{ marginLeft:'60px',marginRight:'60px' }} >
                                            {this.props.home.category_items.results.length > 0 ? this.props.home.category_items.results.map(e1 => {
                                                return <Courses_type lang={this.props.language} course={e1} id={e1.id} key={e1.id} name={this.props.language==='ar'?e1.name_a:e1.name_e} image={e1.image} desc={this.props.language==='ar'?e1.short_desc_a:e1.short_desc_e} text={true} />
                                            }) : <div className="animated fadeIn" style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px' }} > <Translate id="course.notfound"/> </div>}
                                            <div className="clearfix"> </div>
                                        </div>
                                    } </TabPane>
                            })}

                        </Tabs>

                    </div>
                    <div id="new_courses" className="materialsf-section">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts white-clrf"> <Translate id="home.title.new" /> </h3>
                            <div className="carousel slide materialf-slider" id="myCarousel4">
                                <div className="carousel-inner" >
                                    {this.props.loading.homenewcourses === 1 ?
                                        <Row style={{ padding: '16px' }} gutter={16}>
                                            <Col span={6}>
                                                <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                        </Row>
                                        :
                                        this.props.courses.new.results.map((e, i) => {
                                            return <div key={i} className={i === 0 ? "item active" : "item"} style={{ background: 'none' }} >
                                                <ul className="thumbnails">
                                                    {e.map(e1 => {
                                                        return <Shop_card course={e1} key={e1.id} name={this.props.language==='ar'?e1.name_a:e1.name_e} raters={e1.total_raters} image={e1.image} desc={this.props.language==='ar'?e1.short_desc_a:e1.short_desc_e} price={e1.price} rate={e1.total_rating / e1.total_raters} instructor={''} id={e1.id} />
                                                    })}
                                                </ul>
                                            </div>
                                        })}
                                               <a style={{float:'right',color:'white',marginTop:'20px'}} onClick={()=>{this.props.history.push('/search',{type:'new'}) }}> <Translate id="more" /> ... </a>

                                </div>
                                <nav>
                                    <ul className="control-box pager">
                                        <li>
                                            <a data-slide="prev" href="#myCarousel4" className="">
                                                <i className="glyphicon glyphicon-chevron-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-slide="next" href="#myCarousel4" className="">
                                                <i className="glyphicon glyphicon-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div id="popular_courses" className="materialsf-section">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts white-clrf"><Translate id="home.title.popular" /> </h3>
                            <div className="carousel slide materialf-slider" id="myCarousel1">
                                <div className="carousel-inner" >
                                    {this.props.loading.homepopcourses === 1 ?
                                        <Row style={{ padding: '16px' }} gutter={16}>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                        </Row>
                                        :
                                        this.props.courses.popular.results.map((e, i) => {
                                            return <div key={i} className={i === 0 ? "item active" : "item"} style={{ background: 'none' }} >
                                                <ul className="thumbnails">
                                                    {e.map(e1 => {
                                                        return <Shop_card course={e1} key={e1.id} name={this.props.language==='ar'?e1.name_a:e1.name_e} raters={e1.total_raters} image={e1.image} desc={this.props.language==='ar'?e1.short_desc_a:e1.short_desc_e} price={e1.price} rate={e1.total_rating / e1.total_raters} instructor={''} id={e1.id} />
                                                    })}
                                                </ul>
                                            </div>
                                        })}
                                               <a style={{float:'right',color:'white',marginTop:'20px'}} onClick={()=>{this.props.history.push('/search',{type:'popular'}) }} > <Translate id="more" /> ... </a>

                                </div>
                                <nav>
                                    <ul className="control-box pager">
                                        <li>
                                            <a data-slide="prev" href="#myCarousel1" className="">
                                                <i className="glyphicon glyphicon-chevron-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-slide="next" href="#myCarousel1" className="">
                                                <i className="glyphicon glyphicon-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div id="offered_courses" className="materialsf-section">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts white-clrf"><Translate id="home.title.offered" /> </h3>
                            <div className="carousel slide materialf-slider" id="myCarousel2">
                                <div className="carousel-inner" >
                                    {this.props.loading.homeoffcourses === 1 ?
                                        <Row style={{ padding: '16px' }} gutter={16}>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                        </Row>
                                        :
                                        this.props.courses.offers.results.map((e, i) => {
                                            return <div key={i} className={i === 0 ? "item active" : "item"} style={{ background: 'none' }} >
                                                <ul className="thumbnails">
                                                    {e.map(e1 => {
                                                        return <Shop_card course={e1} key={e1.id} name={this.props.language==='ar'?e1.name_a:e1.name_e} raters={e1.total_raters} image={e1.image} desc={this.props.language==='ar'?e1.short_desc_a:e1.short_desc_e} price={e1.price} rate={e1.total_rating / e1.total_raters} instructor={''} id={e1.id} />
                                                    })}
                                                </ul>
                                            </div>
                                        })

                                    }
                                               <a style={{float:'right',color:'white',marginTop:'20px'}} onClick={()=>{this.props.history.push('/search',{type:'offered'}) }} > <Translate id="more" /> ... </a>

                                </div>
                                <nav>
                                    <ul className="control-box pager">
                                        <li>
                                            <a data-slide="prev" href="#myCarousel2" className="">
                                                <i className="glyphicon glyphicon-chevron-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-slide="next" href="#myCarousel2" className="">
                                                <i className="glyphicon glyphicon-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    <div id="rated_courses" className="materialsf-section">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts white-clrf"><Translate id="home.title.rated" /> </h3>
                            <div className="carousel slide materialf-slider" id="myCarousel3">
                                <div className="carousel-inner" >
                                    {this.props.loading.homeratedcourses === 1 ?
                                        <Row style={{ padding: '16px' }} gutter={16}>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                            <Col span={6}>
                                            <div className='image-loading' ></div>
                                                <Card loading={true} bordered={false}>Card content</Card>
                                            </Col>
                                        </Row>
                                        :
                                        this.props.courses.rated.results.map((e, i) => {
                                            return <div key={i} className={i === 0 ? "item active" : "item"} style={{ background: 'none' }} >
                                                <ul className="thumbnails">
                                                    {e.map(e1 => {
                                                        return <Shop_card course={e1} key={e1.id} name={this.props.language==='ar'?e1.name_a:e1.name_e} raters={e1.total_raters} image={e1.image} desc={this.props.language==='ar'?e1.short_desc_a:e1.short_desc_e} price={e1.price} rate={e1.total_rating / e1.total_raters} instructor={''} id={e1.id} />
                                                    })}
                                                </ul>
                                            </div>
                                        })
                                    }
                                               <a style={{float:'right',color:'white',marginTop:'20px'}} onClick={()=>{this.props.history.push('/search',{type:'rated'}) }} > <Translate id="more" /> ... </a>

                                </div>
                                <nav>
                                    <ul className="control-box pager">
                                        <li>
                                            <a data-slide="prev" href="#myCarousel3" className="">
                                                <i className="glyphicon glyphicon-chevron-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-slide="next" href="#myCarousel3" className="">
                                                <i className="glyphicon glyphicon-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="loadf-section">
                    <div className="posf-grids">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts">Achieve more with CBC Centers coaching sessions.</h3>
                            <div className="col-md-4 posf-left">
                                <div className="pos1">
                                    <a href="courses.html">Courses</a>
                                    <p className="paragraphf white-clrf">Pellentesque convallis diam consequat</p>
                                </div>
                                <div className="pos2">
                                    <a href="marketing.html">Marketing</a>
                                    <p className="paragraphf white-clrf">Pellentesque convallis diam consequat</p>
                                </div>
                            </div>
    
                            <div className="col-md-4 posf-right">
                                <div className="pos3">
                                    <a href="development.html">Development</a>
                                    <p className="paragraphf white-clrf">Pellentesque convallis diam consequat</p>
                                </div>
                                <div className="pos4">
                                    <a href="business.html">Business</a>
                                    <p className="paragraphf white-clrf">Pellentesque convallis diam consequat</p>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                            <div className="posf-btm">
                                <div className="pos5">
                                    <a href="maths.html">Maths</a>
                                    <p className="paragraphf white-clrf">Pellentesque convallis diam consequat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                    {/* <div className="reviewf-main">
                    <div className="container">
                        <h3 className="tittlef-agileits-w3layouts">Amazing Client Stories</h3>
                        <div className="col-md-6 reviewsf-left">
                            <div className="reviewsf-left">
                                <div className="news-grids-bottom">
                                    <div id="design" className="date">
                                        <div id="cycler">
                                           <Reviews />
                                           <Reviews />
                                           <Reviews />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 reviewsf-right">
                            <h3 className="sub-w3ls-headf">Pellentesque convallis diam
                        <span>consequat magna</span> vulputate malesuada</h3>
                            <p className="paragraphf">
                                <span className="fa fa-repeat" aria-hidden="true"></span> Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra
                        sem, eget pulvinar neque pharetra ac.</p>
                            <p className="paragraphf">
                                <span className="fa fa-repeat" aria-hidden="true"></span> Lorem Ipsum convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem,
                        eget pulvinar neque pharetra ac.</p>
                            <div className="buttonf-styl">
                                <Link to="/contact" >Contact Us</Link>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div> */}
                </div>
                {/* } */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { home: state.home, courses: state.courses, loading: state.loadingBar, categories: state.header.categories,language:state.language.code };
}


export default connect(mapStateToProps, {
    homeCatItems,
    homeCatList,
    homeEventNotif,
    homeSlider,
    homeNewCourses,
    homeOffCourses,
    homePopCourses,
    homeRatCourses,
    searchByfilters,
    homeWishlist
})(home);