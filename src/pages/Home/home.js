import React, { Component } from 'react';
import './home.css';
import Shop_card from '../../components/shop_card/shop_card';
import Courses_type from '../../components/courses_type/courses_type';
import { Tabs, Card, Carousel,Col, Row } from 'antd';
import { connect } from 'react-redux';
import { homeCatItems, homeNewCourses, homeOffCourses, homePopCourses, homeRatCourses, homeCatList, homeEventNotif, homeSlider } from '../../actions'
import { Link } from 'react-router-dom';
import range from 'lodash/range';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

class home extends Component {

    constructor(props) {
        super(props)
        this.state = { categories: [], slider: [] }

    }

    componentWillMount() {
        this.props.homeCatList();
        this.props.homeSlider();
        this.props.homeEventNotif();
        this.props.homePopCourses('0', '4');
        this.props.homeOffCourses('0', '4');
        this.props.homeRatCourses('0', '4');
        this.props.homeNewCourses('0', '4');

        console.log(this.props)
    }

    componentDidMount() {
    }


    render() {
        // window.scrollTo(0, 0)
        return (
            <div>

                <div>
                    {this.props.loading.homeslider === 1 ?
                        <Row gutter={8} justify="center" >
                            <Card loading={true} bordered={false}>Card content</Card>
                        </Row> :
                        <Carousel autoplay>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    }

                    <div className="aboutf">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts">Top most popular courses</h3>
                            <p className="paragraphf"></p>
                        </div>
                        {/* <div style={{ marginBottom: 16 }}>
                        </div> */}

                        {this.props.loading.homecat === 1 ?
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card loading={true} bordered={false}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card loading={true} bordered={false}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card loading={true} bordered={false}>Card content</Card>
                                </Col>
                            </Row>
                            :

                            <Tabs onChange={callback} animated={true} tabBarStyle={{ display: 'flex', justifyContent: 'space-around' }} tabBarGutter={100} size="large" type="card">
                                {this.props.home.categories.map(e => {
                                    return <TabPane tab={e.aname} key={e.id} >     <div className="tab-pane"  >
                                        <div className="main-topicsf">
                                            {e.courses.map(e1 => {
                                                return <Courses_type course={e1} id={e1.id} key={e1.id} name={e1.nameE} image={e1.image} desc={e1.shortDescE} text={true} />
                                            })}
                                            <div className="clearfix"> </div>
                                        </div>
                                    </div>  </TabPane>
                                })}

                            </Tabs>
                        }
                    </div>

                    <div id="popular_courses" className="materialsf-section">
                        <div className="container">
                            <h3 className="tittlef-agileits-w3layouts white-clrf">Popular Courses</h3>
                            <div className="carousel slide materialf-slider" id="myCarousel1">
                                <div className="carousel-inner" >

                                    <div className={"item active"} style={{ background: 'none' }} >
                                        <ul className="thumbnails">
                                            {this.props.loading.homepopcourses === 1 ?
                                                <Row gutter={16}>
                                                    <Col span={8}>
                                                        <Card loading={true} bordered={false}>Card content</Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card loading={true} bordered={false}>Card content</Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card loading={true} bordered={false}>Card content</Card>
                                                    </Col>
                                                </Row>
                                                :
                                                this.props.courses.popular.content.map(e => {
                                                    return <Shop_card course={e} key={e.id} name={e.nameE} raters={e.totalRaters} image={e.image} desc={e.shortDescE} price={e.price} rate={e.totalRating / e.totalRaters} instructor={e.creator.firstName + ' ' + e.creator.lastName} id={e.id} />
                                                })}

                                        </ul>
                                    </div>
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
                            <h3 className="tittlef-agileits-w3layouts white-clrf">Offered Courses</h3>
                            <div className="carousel slide materialf-slider" id="myCarousel2">
                                <div className="carousel-inner" >
                                    <div className="item active" style={{ background: 'none' }} >
                                        <ul className="thumbnails">
                                            {this.props.loading.homeoffcourses === 1 ?
                                                <Row gutter={16}>
                                                    <Col span={8}>
                                                        <Card loading={true} bordered={false}>Card content</Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card loading={true} bordered={false}>Card content</Card>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Card loading={true} bordered={false}>Card content</Card>
                                                    </Col>
                                                </Row>
                                                :
                                                this.props.courses.offers.content.map(e => {
                                                    return <Shop_card key={e.id} raters={e.totalRaters} name={e.nameE} image={e.image} desc={e.shortDescE} price={e.price} rate={e.totalRating / e.totalRaters} instructor={e.creator.firstName + ' ' + e.creator.lastName} id={e.id} />
                                                })}
                                        </ul>
                                    </div>
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
                            <h3 className="tittlef-agileits-w3layouts white-clrf">Rated Courses</h3>
                            <div className="carousel slide materialf-slider" id="myCarousel3">
                                <div className="carousel-inner" >
                                    <div className="item active" style={{ background: 'none' }} >
                                        <ul className="thumbnails">
                                            {this.props.loading.homeoffcourses === 1 ? <Row gutter={16}>
                                                <Col span={8}>
                                                    <Card loading={true} bordered={false}>Card content</Card>
                                                </Col>
                                                <Col span={8}>
                                                    <Card loading={true} bordered={false}>Card content</Card>
                                                </Col>
                                                <Col span={8}>
                                                    <Card loading={true} bordered={false}>Card content</Card>
                                                </Col>
                                            </Row> :
                                                this.props.courses.rated.content.map(e => {
                                                    return <Shop_card key={e.id} name={e.nameE} raters={e.totalRaters} image={e.image} desc={e.shortDescE} price={e.price} rate={e.totalRating / e.totalRaters} instructor={e.creator.firstName + ' ' + e.creator.lastName} id={e.id} />
                                                })}

                                        </ul>
                                    </div>

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
    return { home: state.home, courses: state.courses, loading: state.loadingBar };
}


export default connect(mapStateToProps, { homeCatItems, homeCatList, homeEventNotif, homeSlider, homeNewCourses, homeOffCourses, homePopCourses, homeRatCourses })(home);