import React, { Component } from 'react';
import './course_main.css';
import { Link } from 'react-router-dom';
import Course_instructor from '../../components/course_instructor/course_instructor';
import Course_faqs from '../../components/course_faqs/course_faqs';
import May_like from '../../components/may_like/may_like';
import Course_week from '../../components/course_week/course_week';
import How_works from '../../components/how_works/how_works';
class course_main extends Component {
constructor(props) {
	super(props);
	console.log(this.props)
}

	render() {
		window.scrollTo(0, 0)
		return (
			<div>
				<div className="minner_page_mainsmk minner_page_mainsmk_2">
					<div className="float-right">
						<h3 className="mtittle">{this.props.location.state?this.props.location.state.nameE:'Course Name'}</h3>
						<p> {this.props.location.state?this.props.location.state.shortDescE:'Short Describtion'} </p>
					</div>
					<div className="col-sm-3 nav-links">
						<nav className='navbar navbar-default mtextmk-nav'>

							<div className='navbar-header'>
								<button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
									<span className='sr-only'>Toggle Navigation</span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
								</button>
							</div>
							<div className='collapse navbar-collapse'>
								<ul>
									<li>
										<a href="#intro" className="scroll">
											<div className="course-image">
												<img className="imagedropshadow" src="https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png" /> <br />
												<span>	{this.props.location.state?this.props.location.state.nameE:'Course Name'} </span>
											</div>
										</a>

									</li>
									<li>
										<a className="scroll">Introduction</a>
									</li>
									<li>
										<a className="scroll">Syllabus</a>
									</li>
									<li>
										<a className="scroll">How It Works</a>
									</li>
									<li>
										<a className="scroll">Instructors</a>
									</li>
									<li>
										<a className="scroll">Faqs</a>
									</li>
									<li>
										<Link to="/enrollment" className="scroll">Enroll</Link>
									</li>
									<li>
										<a className="scroll">Course Fee</a>
									</li>
									<li>
										<Link to="/course_details" >View More</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>

				<div className="mcontent-course">
					<div className="container">

						<div className="col-sm-9 mmain-right-textmk-content" id="intro">
							<div className="mheading-mainsmk">
								<h4 className="tittle-course">About this Course :</h4>
								<ul>
									<li>
										<i className="fa fa-long-arrow-right" aria-hidden="true"></i>Sed ut perspiciatis unde omnis iste natus doloremque laudantium</li>
									<li>
										<i className="fa fa-long-arrow-right" aria-hidden="true"></i>Quis iure reprehenderit qui in ea voluptate velit esse quam</li>
									<li>
										<i className="fa fa-long-arrow-right" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
								</ul>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
									eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Sit voluptatem accusantium
						doloremque laudantium totam rem aperiam.</p>
								<Link to="/course_details" className="mbutton-course">Some More</Link>
							</div>
							<div className="mwho-we-textmks" id="syllabus">
								<h4 className="tittle-course">Syllabus</h4>
								<div className="who-right-mainsmkits">
									<div className="panel-group textmk_panel_group_faq" id="accordion" role="tablist" aria-multiselectable="true">
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingOne">
												<h4 className="panel-title asd">
													<a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
														aria-controls="collapseOne">
														<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
														<i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Week 1
										</a>
												</h4>
											</div>
											<Course_week heading="headingOne" collapse="collapseOne" active={true} />
										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
												<h4 className="panel-title asd">
													<a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
														aria-controls="collapseTwo">
														<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
														<i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Week 2
										</a>
												</h4>
											</div>
											<Course_week heading="headingTwo" collapse="collapseTwo" />

										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingThree">
												<h4 className="panel-title asd">
													<a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"
														aria-controls="collapseThree">
														<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
														<i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Week 3
										</a>
												</h4>
											</div>
											<Course_week heading="headingThree" collapse="collapseThree" />

										</div>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="mservice-grids" id="how">
								<h4 className="tittle-course">How It Works</h4>

								<How_works />
								<How_works />
								<How_works />
								<How_works />


							</div>
							<div className="minner_sec_info_mmstyle_mainsmk" id="instru">
								<h4 className="tittle-course">Instructors</h4>
								<Course_instructor />
								<Course_instructor />

								<Course_instructor />

								<div className="clearfix"></div>
								<Course_instructor />

								<Course_instructor />

								<div className="clearfix"></div>

							</div>
							<div className="mfaq-mmmainsmk" id="faqs">
								<h4 className="tittle-course">Faqs</h4>
								<ul className="faq">
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
									<Course_faqs />
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mmainsmk-content-date" id="course_fee">
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
									<h4>$8,300</h4>
									<p>Know More</p>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="clearfix"></div>
					</div>
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


			</div>
		);
	}
}

export default course_main;