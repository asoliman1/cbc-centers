import React, { Component } from 'react';
import './course_main.css';
import { Link } from 'react-router-dom';
import Course_instructor from '../../components/course_instructor/course_instructor';
import Course_faqs from '../../components/course_faqs/course_faqs';
import May_like from '../../components/may_like/may_like';
import Course_week from '../../components/course_week/course_week';
import How_works from '../../components/how_works/how_works';
import {connect} from 'react-redux';
import {getCourseRounds,addShopCart,courseModules,courseDesc,courseDetails,courseInstr} from '../../actions/index';
import { Collapse, Rate } from 'antd';
import { Row, Col } from 'antd';
import { Menu ,Anchor} from 'antd';

const Link1 = Anchor.Link;
const SubMenu = Menu.SubMenu;
const Panel = Collapse.Panel;
class course_main extends Component {
constructor(props) {
	super(props);
	console.log(this.props)
	this.state={round:{},hideNav:false,widthNav:0}
}

componentWillMount(){
	window.scrollTo(0, 0)
	window.addEventListener("resize", this.resize.bind(this));
	this.resize()
}
resize() {
	this.setState({ hideNav: window.innerWidth <= 800,widthNav:window.innerWidth });
}
componentDidMount(){
	this.props.courseDetails(this.props.match.params.id)
	this.props.getCourseRounds(this.props.match.params.id)
	this.props.courseModules(this.props.match.params.id)
	this.props.courseDesc(this.props.match.params.id)
	this.props.courseInstr(this.props.match.params.id)

	console.log(this.props)

}

	render() {
		return (
			<div>
				<div className="minner_page_mainsmk ">
				{this.props.loading.courseDetails===0?
					<div className="float-right ">
						<h3 className="mtittle animated bounceInLeft">{this.props.course.name_e}</h3>
						<p className="animated bounceInLeft" > {this.props.course.short_desc_e} </p>
						<Rate className="animated bounceInLeft" value={this.props.course.total_rating} disabled={true} />
					</div>
					:''}
					
				</div>
				
					{/* <div className="container"> */}
					
					<Row >

						<Col>
						{this.props.loading.courseDetails===0?
						<div className="col-sm-3 nav-links animated fadeIn" style={{top:this.state.hideNav?'-60px':'-170px'}} >
						<nav className='navbar navbar-default mtextmk-nav'>

							<div className='navbar-header'>
								<button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
									<span className='sr-only'>Toggle Navigation</span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
								</button>
							</div>
							<div className='collapse navbar-collapse' style={{background:'#04bafe'}}>
								<ul>
									<li>
										<a className="scroll">
											<div className="course-image">
												<img className="imagedropshadow" src={this.props.course.image?this.props.course.image:'/images/error.jpg'}  /> <br />
												<span>	{this.props.course.name_e} </span>
											</div>
										</a>

									</li>
									<Anchor bounds={50} offsetTop={120} style={{marginLeft:'0',background:'#04bafe',fontSize:'16px'}} showInkInFixed >
									<Link1  title="Introduction" href="#intro" />
									<Link1  title="Syllabus" href="#syllabus" />
									<Link1 title="How It Works" href="#how" />
									<Link1 title="Instructors" href="#instr" />
									<Link1 title="Faqs" href="#faqs" />
									<Link1 title="Enroll" href="#rounds" />
									<Link1 title="Rounds" href="#rounds" />
									</Anchor>
								</ul>
							</div>
						</nav>
					</div> 
						:''}
						</Col>
					
    <Col xs={20} sm={18} md={16} lg={15} xl={15} style={{paddingTop:'20px'}}  > 
						{/* <div className="col-sm-9 mmain-right-textmk-content" id="intro"> */}
							<div className="mheading-mainsmk animated fadeIn" style={{paddingLeft:'15%'}} id="intro" >
								<h4 className="tittle-course">About this Course :</h4>
								
								<ul>
									{this.props.desc.length===0&&this.props.loading.coursedec===0?<div>No Data</div>:''}
								{this.props.desc.map(e=>{
									return <li key={e.id} >
									<i className="fa fa-long-arrow-right" aria-hidden="true"></i>{e.title_e} <br/>
									<p> {e.description_e} </p>
									
									</li>
								})}
								</ul>
							
								{/* <Link to="/course_details" className="mbutton-course">Some More</Link> */}
							</div>
							
							<div className="mwho-we-textmks" style={{paddingLeft:'15%'}} id="syllabus">
								<h4 className="tittle-course">Syllabus</h4>
								<div className="who-right-mainsmkits">
								{this.props.modules.length===0&&this.props.loading.coursemodules===0?<div>No Data</div>:''}

								<Collapse accordion>

										{this.props.modules.map((e,i)=>{
											return 	<Panel header={"Week "+e.week_number} key={e.id}>
												<ul>
													<li style={{wordBreak:'break-all'}} >- {e.text_e}</li>
													<li>- <a href={e.field_url} > Visit tutorial</a></li>
													<li>- Duration : {e.duration}</li>
												</ul>
											
										  </Panel>
										})}
									
									
									
									</Collapse>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="mservice-grids" style={{paddingLeft:'15%'}}  id="how">
								<h4 className="tittle-course">How It Works</h4>

								<How_works />
								<How_works />
								<How_works />
								<How_works />


							</div>
							<div className="minner_sec_info_mmstyle_mainsmk" style={{paddingLeft:'15%'}} id="instru">
								<h4 className="tittle-course">Instructors</h4>
							
								<Course_instructor details={this.props.instructors} />


								<div className="clearfix"></div>

							</div>
							<div className="mfaq-mmmainsmk" style={{paddingLeft:'15%'}}  id="faqs">
								<h4 className="tittle-course">Faqs</h4>
								<ul className="faq">
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
								</ul>
							</div>
							
						{/* </div> */}
						
						<div className="clearfix"></div>

					{/* </div> */}
					</Col>
  </Row>
  <div id="rounds" >
  {this.props.rounds.length===0&&this.props.loading.getCourseRounds===0?<div>No Data</div>:''}

				{this.props.rounds.map(e=>{
					return <div className="mmainsmk-content-date" key={e.id} style={{marginBottom:'20px'}} id="course_fee">
					<div className="container">
						<div className="col-sm-3 textmk-sub-time2">
						
						</div>
						<div className="col-sm-9 textmk-sub-time">
							<div className="col-md-4 date-course-grid">
								<div className="grids-mainsmk-duration">
									<h6>Course Duration</h6>
									<h4>Feb - June 2018</h4>
									<p>Online, 4 Months</p>
								</div>
							</div>
							<div className="col-md-4 date-course-grid">
								<div className="grids-mainsmk-duration">
									<h6>Timings</h6>
									<h4>4-8 hours</h4>
									<p>Per Day</p>
								</div>
							</div>
							<div className="col-md-4 date-course-grid">
								<div className="grids-mainsmk-duration">
									<h6>Price</h6>
									<h4>{e.price}$</h4>
									<p>Know More</p>
								</div>
							</div>
						
							<div className="clearfix"></div>
						</div>
						<div className="clearfix"></div>
					</div>
					<div style={{textAlign:'center',marginLeft:'80px',marginTop:'50px',fontSize:'30px'}} > 
					<a  style={{color:'white'}} onClick={()=>{this.setState({round:e});this.props.addShopCart(e.price,this.props.location.state.course.id,e.id)}} > Enroll </a>
						
						 </div>
				</div>
				})}
			</div>	
				<div className="mexperience-textmkayouts">
					<div className="container">
						<div className="col-sm-3 textmk-sub-time2">
						</div>
						<div className="col-sm-9 textmk-like-time2">
							<h4 className="tittle-course">You May Also Like</h4>
							<May_like />
							<May_like />
							<May_like />
							<May_like />
							<div className='clearfix'></div>
						</div>
						<div className='clearfix'></div>
					</div>
					
				</div>
				{/* </div> */}


			</div>
		);
	}
}

function mapStateToProps(state){
	return {rounds:state.shop_cart.rounds,modules:state.course_details.modules,desc:state.course_details.describtion,course:state.course_details.course,instructors:state.course_details.instructors,loading:state.loadingBar}
}

export default connect(mapStateToProps,{getCourseRounds,addShopCart,courseModules,courseDesc,courseDetails,courseInstr}) (course_main);