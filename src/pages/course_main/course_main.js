import React, { Component } from 'react';
import './course_main.css';
import Course_instructor from '../../components/course_instructor/course_instructor';
import May_like from '../../components/may_like/may_like';
import How_works from '../../components/how_works/how_works';
import { connect } from 'react-redux';
import { getCourseRounds, addShopCart, courseModules, courseDesc, courseDetails, courseInstr, addWishList, share, removeWishlist,searchByfilters } from '../../actions/index';
import { Row, Col , Anchor, Icon, Collapse, Rate, Button, Popover, Input, Affix,Menu } from 'antd';
import { Translate } from "react-localize-redux";
import moment from 'moment';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const Link1 = Anchor.Link;
const Panel = Collapse.Panel;
class course_main extends Component {
	constructor(props) {
		super(props);
		this.state = { round: {}, hideNav: false, widthNav: 0, liked: false, email: '', wish_id: '' }
	}

	componentWillMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize()
		this.props.courseDetails(this.props.match.params.id)
		if (this.props.rounds.filter(e => e.course === this.props.match.params.id * 1).length === 0)
			this.props.getCourseRounds(this.props.match.params.id)

		this.props.courseModules(this.props.match.params.id)
		this.props.courseDesc(this.props.match.params.id)
		this.props.courseInstr(this.props.match.params.id)
	}
	resize() {
		this.setState({ hideNav: window.innerWidth <= 800, widthNav: window.innerWidth });
	}


	componentWillReceiveProps(e) {
		this.checkLike()
		if(typeof this.props.course.id !=='undefined' && typeof e.loading.searchbyfilters === 'undefined'){
		this.props.searchByfilters(e.course.categories[0].category,e.course.categories[0].subcategory,'','','','1','4')
		}
	}


	checkLike() {
		let items = this.props.wishlist.filter(e => e.course === this.props.match.params.id * 1);
		if (items.length > 0) {
			this.setState({ liked: true, wish_id: items[0].id })
		} else {
			this.setState({ liked: false, wish_id: '' })
		}
	}

	
	  handleClick = (e) => {
		this.setState({
		  current: e.key,
		});
	  }

	  
	render() {
		const shareButtons = <div style={{ padding: 10 }} > <Input name="email" type="email" style={{ marginBottom: 10 }} onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }} placeholder={this.props.language === 'ar' ? 'ايميل' : 'Email'} />  <Button onClick={() => { if (this.state.email !== '') this.props.share(this.state.email, this.props.match.params.id) }} type="primary">
			<Icon type="share-alt" />
		</Button>
		</div>
		const text = (
			<p style={{
				paddingLeft: 24, lineHeight: '25px',
				fontSize: 14,
				letterSpacing: 0.5,
				color: '#000'
			}}>
				A dog is a type of domesticated animal.
				Known for its loyalty and faithfulness,
				it can be found as a welcome guest in many households across the world.
	</p>
		);

		return (
			<div className="course-main" >
				<div className="minner_page_mainsmk ">
					{this.props.loading.courseDetails === 0 ?
						<div className={this.props.language === 'ar' ? "" : "float-right"} >
							<h3 className="mtittle animated bounceInLeft">{this.props.language === 'ar' ? this.props.course.name_a : this.props.course.name_e}</h3>
							<p className="animated bounceInLeft" > {this.props.language === 'ar' ? this.props.course.short_desc_a : this.props.course.short_desc_e} </p>
							<Rate className="animated bounceInLeft" value={this.props.course.total_rating} disabled={true} />
						</div>
						: ''}

				</div>

				{/* <div className="container"> */}

				<Row >
				{this.props.loading.courseDetails === 0 ?
					<div className="col-sm-3 col-xlg-5 animated fadeIn" style={{position: 'sticky',top:100,marginTop: this.state.hideNav ? '-20px' : '-170px', float: this.props.language === 'ar' && !this.state.hideNav ? 'right' : '', zIndex: '11',maxWidth:400 }} >
						
								{this.state.hideNav? 
								
											<Anchor affix={false} offsetTop={170} className="anchor-items-menu"   style={{ marginLeft: '0', background: 'rgba(9, 12, 45,0.9)', direction: this.props.language === 'ar' ? 'rtl' : '' }}  >
												<ol style={{display:'flex',justifyContent:'space-around',padding:0}} >
												<Link1 title={<Translate id="course.details.about" />} href="#intro" />
												<Link1 title={<Translate id="syllabus" />} href="#syllabus" />
												<Link1 title={<Translate id="menu.how.it.works" />} href="#how" />
												</ol>
												<ol style={{display:'flex',justifyContent:'space-around',padding:0}} start="4" >
												<Link1 title={<Translate id="instructors" />} href="#instr" />
												<Link1 title={<Translate id="faqs" />} href="#faqs" />
												<Link1 title={<Translate id="enroll" />} href="#rounds" />
												</ol>
											</Anchor>
     							 :
								<nav className='navbar navbar-default'>

									
									<div style={{ background: 'rgb(9, 12, 45)' }}>
										<ul>
											<li>
												<a >
													<div className="course-image">
														<img className="imagedropshadow" src={this.props.course.image ? this.props.course.image : '/images/error.jpg'} onError={(e) => { e.target.src = '/images/error.jpg' }} /> <br />
														<span>	{this.props.language === 'ar' ? this.props.course.name_a : this.props.course.name_e} </span>
													</div>
												</a>

											</li>
											<li>
												<a>
													<div >
														{this.state.liked ?
															<Button onClick={() => { this.props.removeWishlist(this.state.wish_id); this.setState({ liked: false }) }} ><Icon style={{ color: 'red' }} type={"heart"} /></Button>
															:
															<Button onClick={() => { if (!this.props.auth.status) { this.props.history.push({ pathname: '/login_signup', state: { modal: true } }) } else { this.props.addWishList(this.props.match.params.id); this.setState({ liked: true }) } }} ><Icon style={{ color: 'red' }} type={"heart-o"} /></Button>

														}
														<Popover placement={this.props.language === 'ar' ? 'left' : 'right'} title="Share" content={shareButtons} >

															<Button  >

																<Icon type="share-alt" />
															</Button>
														</Popover>

													</div>
												</a>

											</li>
											<Anchor affix={false} offsetTop={100}  className="anchor-items"  style={{ marginLeft: '0', background: 'rgb(9, 12, 45)', direction: this.props.language === 'ar' ? 'rtl' : '' }} showInkInFixed >
												<Link1 title={<Translate id="course.details.about" />} href="#intro" />
												<Link1 title={<Translate id="syllabus" />} href="#syllabus" />
												<Link1 title={<Translate id="menu.how.it.works" />} href="#how" />
												<Link1 title={<Translate id="instructors" />} href="#instr" />
												<Link1 title={<Translate id="faqs" />} href="#faqs" />
												<Link1 title={<Translate id="enroll" />} href="#rounds" />
											</Anchor>
										</ul>
									</div>
									
								</nav>}
								</div>
							
							: ''}

					<Col xs={20} sm={18} md={16} lg={15} xl={17} style={{paddingLeft:'5%', paddingTop: '20px', direction: this.props.language === 'ar' ? 'rtl' : '' }}  >
						{/* <div className="col-sm-9 mmain-right-textmk-content" id="intro"> */}
						<div className="mheading-mainsmk animated fadeIn" style={{ marginTop:10 }} id="intro" >
							<h4 className="tittle-course"><Translate id="course.details.about" /> </h4>

							<ul>
								{this.props.desc.length === 0 && this.props.loading.coursedec === 0 ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px',textAlign:'center' }} > <Translate id="course.detais.nodata" /> </div> : ''}
								{this.props.desc.map(e => {
									return <li key={e.id} >
										<i className={this.props.language === 'ar' ? "fa fa-long-arrow-left" : "fa fa-long-arrow-right"} aria-hidden="true"></i>{this.props.language === 'ar' ? e.title_a : e.title_e} <br />
										<p> {this.props.language === 'ar' ? e.description_a : e.description_e} </p>

									</li>
								})}
							</ul>

							{/* <Link to="/course_details" className="mbutton-course">Some More</Link> */}
						</div>

						<div className="mwho-we-textmks" id="syllabus">
							<h4 className="tittle-course"><Translate id="syllabus" /></h4>
							<div className="who-right-mainsmkits">
								{this.props.modules.length === 0 && this.props.loading.coursemodules === 0 ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px',textAlign:'center' }} > <Translate id="course.details.nodata" /></div> : ''}

								<Collapse accordion>

									{this.props.modules.map((e, i) => {
										return <Panel header={this.props.language === 'ar' ? ' اسبوع ' + e.week_number : "Week " + e.week_number} key={e.id}>
											<ul>
												<li style={{ wordBreak: 'break-all', padding: '16px' }} >- {this.props.language === 'ar' ? e.text_a : e.text_e}</li>
												<li style={{ padding: '16px' }} >- <a href={e.field_url} > <Translate id="visit_tot" /></a></li>
												<li style={{ padding: '16px' }} >- <Translate id="duration" /> : {e.duration}</li>
											</ul>

										</Panel>
									})}



								</Collapse>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="mservice-grids" id="how">
							<h4 className="tittle-course"> <Translate id="menu.how.it.works" /> </h4>

							<How_works lang={this.props.language} />
							<How_works lang={this.props.language} />
							<How_works lang={this.props.language} />
							<How_works lang={this.props.language} />


						</div>
						<div className="minner_sec_info_mmstyle_mainsmk" id="instr">
							<h4 className="tittle-course"> <Translate id="instructors" /> </h4>
							{this.props.instructors.map(e => {
								return <Course_instructor key={e.id} total_rating={e.id % 5} lang={this.props.language} details={e} />
							})}
							<div className="clearfix"></div>

						</div>
						<div className="mfaq-mmmainsmk" style={{ marginBottom: '15px' }} id="faqs">
							<h4 className="tittle-course"> <Translate id="faqs" /> </h4>

							<Collapse bordered={false} defaultActiveKey={['1']}>
								<Panel header={<a style={{ fontSize: 18 }} >Question 1</a>} key="1">
									{text}
								</Panel>
								<Panel header={<a style={{ fontSize: 18 }} >Question 2</a>} key="2">
									{text}
								</Panel>
								<Panel header={<a style={{ fontSize: 18 }} >Question 3</a>} key="3">
									{text}
								</Panel>
							</Collapse>
						</div>

						{/* </div> */}

						<div className="clearfix"></div>

						{/* </div> */}
				
				<div style={{marginTop:30}} id="rounds" >
				<h4 className="tittle-course"> <Translate id="course.rounds" /> </h4>

					{this.props.rounds.length === 0 && this.props.loading.getCourseRounds === 0 ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px',textAlign:'center' }} > <Translate id="course.details.nodata" /> </div> : ''}

					{this.props.rounds.filter(e => e.course === this.props.match.params.id * 1).map(e => {
						return <div className="mmainsmk-content-date" key={e.id} style={{ marginBottom: '20px' }} id="course_fee">
							<Row style={{padding:20}} >
							
									<div className="col-md-4 date-course-grid">
										<div className="grids-mainsmk-duration">
											<h6 style={{ whiteSpace: 'nowrap' }} > <Translate id="course.duration" /> </h6>
											<h4 style={{ whiteSpace: 'nowrap' }} > {new Date(e.start_date).getDate() + "/" + new Date(e.start_date).getMonth()} - {new Date(e.end_date).getDate() + "/" + new Date(e.end_date).getMonth()}   {new Date(e.end_date).getFullYear()}</h4>
											<p><Translate id="onsite" />, {Math.abs(  moment(e.end_date).diff(moment(e.start_date), 'days') )} <Translate id="days" /></p>
										</div>
									</div>
									<div className="col-md-4 date-course-grid">
										<div className="grids-mainsmk-duration">
											<h6> <Translate id="course.timing" /> </h6>
											<h4> {e.timing} <Translate id="hours" /> </h4>
											<p> <Translate id="course.per.day" /> </p>
										</div>
									</div>
									<div className="col-md-4 date-course-grid">
										<div className="grids-mainsmk-duration">
											<h6><Translate id="course.round.price" /></h6>
											<h4>{e.price}$</h4>
											<p><Translate id="more" /></p>
										</div>
									</div>

							</Row>
							<div style={{ textAlign: 'center', marginTop: '50px', fontSize: '30px' }} >
								<a className="myButton" onClick={() => { if (!this.props.auth.status) { this.props.history.push({ pathname: '/login_signup', state: { modal: true } }) } else { this.setState({ round: e }); this.props.addShopCart(e.price, e.course, e.id) } }} > <Translate id="enroll" /> </a>

							</div>
						</div>
					})}
				</div>
				<div className="mexperience-textmkayouts">
					<div  >
					<h4 className="tittle-course"> <Translate id="you.may.like" /> </h4>

						<div style={{float:this.props.language==='ar'?'right':''}} className="col-sm-9 ">
						{this.props.may_like.map(e=>{
							return <May_like key={e.id} details={e} lang={this.props.language} />
						})}
						</div>
					</div>

				</div>
				{/* </div> */}

	</Col>
				</Row>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { rounds: state.shop_cart.rounds, modules: state.course_details.modules, desc: state.course_details.describtion, course: state.course_details.course, instructors: state.course_details.instructors, loading: state.loadingBar, language: state.language.code, wishlist: state.wishlist.mini, auth: state.Authentication ,may_like:state.search.results }
}

export default connect(mapStateToProps, { removeWishlist, getCourseRounds, addShopCart, courseModules, courseDesc, courseDetails, courseInstr, addWishList, share ,searchByfilters})(course_main);