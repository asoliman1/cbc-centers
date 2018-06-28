import React, { Component } from 'react';
import "./course_details.css";
import { Link } from "react-router-dom";
import Related_course from '../../components/related_course/related_course';
import Student_review from '../../components/student_review/student_review';
import Course_card from '../../components/course_card/course_card';
class course_details extends Component {
	render() {
		window.scrollTo(0, 0)
		return (
			<div>
				<div className="demo-bg">
					<div className="container">
						<h3 className="demo-title">a revolution in
				<span>online learning</span>
						</h3>
						<p className="demo-ibg-txt">courses</p>
					</div>
				</div>
				<div className="demo-header">
					<div className="container-fluid">
						<ul className="inner_breadcrumb">
							<li>
								<Link to="/home">Home</Link>
								<span>| |</span>
							</li>
							<li className="active">
								<Link to="/courses">Courses</Link>
								<span>| |</span>
							</li>
							<li>Top Most Popular Courses</li>
						</ul>

					</div>
				</div>

				<div className="demo-main demo-sec">
					<div className="containers">
						<div className="demo-content-left col-md-8">
							<h4 className="demo-title">flexible options
					<span>to fit your schedule</span>
							</h4>
							<div className="demo-left">
								<iframe src="https://www.youtube.com/embed/MYnnm8Klp6o" allowFullScreen ></iframe>
							</div>
							<div id="verticalTab">
								<ul className="resp-tabs-list">
									<li>
										<div className="tab1">
											<h3>overview</h3>
										</div>
									</li>
									<li>
										<div className="tab1">
											<h3>live classNamees</h3>
										</div>
									</li>
									<li>
										<div className="tab1">
											<h3>description</h3>
										</div>
									</li>

								</ul>
								<div className="resp-tabs-container">
									<div className="tabs-right1">
										<div id="test" className="tree">
											<ul>
												<li className="parent_li">
													<span className="tree-parent">course</span>
													<ul>
														<li className="sub-parent">
															<span title="Additional inhtmlFormation" className="childnode">lectures</span>
															<ul>
																<li className="parent_li">
																	<span title="Additional inhtmlFormation">objectives</span>
																</li>
																<li className="parent_li">
																	<span title="Additional inhtmlFormation">videos</span>
																	<ul></ul>
																</li>
																<li className="parent_li">
																	<span title="Additional inhtmlFormation">slides</span>
																	<ul></ul>
																</li>
															</ul>
														</li>
														<li className="sub-parent">
															<span title="Additional inhtmlFormation" className="childnode">assignments</span>
															<ul>
																<li className="parent_li">
																	<span title="Additional inhtmlFormation">online discussions</span>
																	<ul></ul>
																</li>
																<li className="sub-parent">
																	<span title="Additional inhtmlFormation" className="grandchild">additional resources</span>

																	<ul>
																		<li className="parent_li">
																			<span title="Additional inhtmlFormation">smart course plans</span>
																			<ul></ul>
																		</li>
																		<li className="parent_li">
																			<span title="Additional inhtmlFormation">Courses</span>
																			<ul></ul>
																		</li>
																		<li className="parent_li">
																			<span title="Additional inhtmlFormation">learning path</span>
																			<ul>
																				<li className="parent_li">
																					<span title="Additional inhtmlFormation" className="grand-child2">Tests</span>
																					<ul>
																						<li className="parent_li">
																							<span title="Additional inhtmlFormation">sample papers</span>
																							<ul></ul>
																						</li>
																						<li className="parent_li">
																							<span title="Additional inhtmlFormation">live test series</span>
																							<ul></ul>
																						</li>
																					</ul>
																				</li>
																			</ul>
																		</li>
																	</ul>
																</li>
															</ul>
														</li>

													</ul>
												</li>
											</ul>
										</div>
									</div>
									<div className="tabs-right1">
										<iframe src="https://www.youtube.com/embed/MYnnm8Klp6o" allowFullScreen></iframe>
									</div>
									<div className="tabs-right1">
										<h6>what will you learn ?</h6>
										<div className="about-main">
											<div className="service-grids">
												<div className="col-md-4 col-sm-4 col-xs-4 services-head">
													<span className="fa fa-check-square-o" aria-hidden="true"></span>
												</div>
												<div className="col-md-8 col-sm-8 col-xs-8 services-text">
													<h4>Heading1</h4>
													<p>Donec libero dui, scelerisque ac augue id, tristique ullamcorper elit. Nam ultrices, adipiscing aliquet.</p>
												</div>
												<div className="clearfix"></div>
											</div>
											<div className="service-grids">
												<div className="col-md-4 col-sm-4 col-xs-4 services-head">
													<span className="fa fa-pie-chart" aria-hidden="true"></span>
												</div>
												<div className="col-md-8 col-sm-8 col-xs-8 services-text">
													<h4>Heading2</h4>
													<p>Donec libero dui, scelerisque ac augue id, tristique ullamcorper elit. Nam ultrices, adipiscing aliquet.</p>
												</div>
												<div className="clearfix"></div>
											</div>
											<div className="service-grids">
												<div className="col-md-4 col-sm-4 col-xs-4 services-head">
													<span className="fa fa-paper-plane-o" aria-hidden="true"></span>
												</div>
												<div className="col-md-8 col-sm-8 col-xs-8 services-text">
													<h4>Heading3</h4>
													<p>Donec libero dui, scelerisque ac augue id, tristique ullamcorper elit. Nam ultrices, adipiscing aliquet.</p>
												</div>
												<div className="clearfix"></div>
											</div>
											<div className="service-grids">
												<div className="col-md-4 col-sm-4 col-xs-4 services-head">
													<span className="fa fa-trello" aria-hidden="true"></span>
												</div>
												<div className="col-md-8 col-sm-8 col-xs-8 services-text">
													<h4>Heading4</h4>
													<p>Donec libero dui, scelerisque ac augue id, tristique ullamcorper elit. Nam ultrices, adipiscing aliquet.</p>
												</div>
												<div className="clearfix"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						<div className="col-md-4 demo-right">
							<div className="newsletter">
								<h4 className="demo-trial">Online Courses From Top Universities.</h4>
								<a className="demo-btn" href="video.html">Start Your Free Trial</a>

							</div>
							<div className="demo-course">
								<h4 className="demo-trial">related courses</h4>
								<Related_course />
								<Related_course />
								<Related_course />
								<Related_course />
							</div>
							<div className="single-side-bar">
								<div className="first_half">
									<div className="list_vertical">
										<div className="accordation_menu">
											<div>
												<input id="label-1" name="lida" type="radio" defaultChecked />
												<label htmlFor="label-1" id="item1">contents
									</label>
												<div className="content" id="a1">
													<div className="scrollbar" id="style-1">
														<div className="demo-accs">
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-pencil-square-o" aria-hidden="true"></span>Links that hold content</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-pencil-square-o" aria-hidden="true"></span>Links that hold content</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-pencil-square-o" aria-hidden="true"></span>Links that hold content</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-pencil-square-o" aria-hidden="true"></span>Links that hold content</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-pencil-square-o" aria-hidden="true"></span>Links that hold content</a>
															</div>

														</div>
													</div>
												</div>
											</div>

											<div>
												<input id="label-3" name="lida" type="radio" />
												<label htmlFor="label-3" id="item3">FAQ
									</label>
												<div className="content" id="a3">
													<div className="scrollbar" id="style-2">
														<div className="demo-accs">
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-angle-double-right" aria-hidden="true"></span>is lorem ipsum dummy?</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-angle-double-right" aria-hidden="true"></span>is lorem ipsum dummy?</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-angle-double-right" aria-hidden="true"></span>is lorem ipsum dummy?</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-angle-double-right" aria-hidden="true"></span>lorem ipsum is dummy?</a>
															</div>
															<div className="demo-acc">
																<a className="acc-title" href="#">
																	<span className="fa fa-angle-double-right" aria-hidden="true"></span>is lorem ipsum dummy?</a>
															</div>
														</div>
													</div>
												</div>
												<div>
													<input id="label-2" name="lida" type="radio" />
													<label htmlFor="label-2" id="item2">
														<i className="icon-leaf" id="i2"></i>excersise files
											<i className="icon-plus-sign i-right1"></i>
														<i className="icon-minus-sign i-right2"></i>
													</label>
													<div className="content" id="a2">
														<div className="scrollbar" id="style-3">
															<div className="htmlForce-overflow">
																<div className="demo-accs">
																	<div className="post-text">
																		<ul>
																			<li>contains supporting documents
																	<a className="span_link" href="#">
																					<span className="fa fa-file-archive-o" aria-hidden="true" title="Download"></span>
																				</a>
																			</li>
																			<li>(x MB)</li>
																		</ul>
																	</div>
																	<div className="post-text">
																		<ul>
																			<li> contains supporting documents
																	<a className="span_link" href="#">
																					<span className="fa fa-file-archive-o" aria-hidden="true" title="Download"></span>
																				</a>
																			</li>
																			<li>(x MB)</li>
																		</ul>
																	</div>
																	<div className="post-text">
																		<ul>
																			<li>contains supporting documents
																	<a className="span_link" href="#">
																					<span className="fa fa-file-archive-o" aria-hidden="true" title="Download"></span>
																				</a>
																			</li>
																			<li>(x MB)</li>
																		</ul>
																	</div>
																	<div className="post-text">
																		<ul>
																			<li>contains supporting documents
																	<a className="span_link" href="#">
																					<span className="fa fa-file-archive-o" aria-hidden="true" title="Download"></span>
																				</a>
																			</li>
																			<li>(x MB)</li>
																		</ul>
																	</div>
																	<div className="post-text">
																		<ul>
																			<li>contains supporting documents
																	<a className="span_link" href="#">
																					<span className="fa fa-file-archive-o" aria-hidden="true" title="Download"></span>
																				</a>
																			</li>
																			<li>(x MB)</li>
																		</ul>
																	</div>
																	<div className="post-text">
																		<ul>
																			<li>contains supporting documents
																	<a className="span_link" href="#">
																					<span className="fa fa-file-archive-o" aria-hidden="true" title="Download"></span>
																				</a>
																			</li>
																			<li>(x MB)</li>
																		</ul>
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="demo-skills">
									<h4 className="demo-trail">skills covered in course</h4>
									<ul>
										<li>
											<span className="fa fa-check-square-o" aria-hidden="true"></span>courses grouped by subject</li>
										<li>
											<span className="fa fa-check-square-o" aria-hidden="true"></span>individual online course</li>
										<li>
											<span className="fa fa-check-square-o" aria-hidden="true"></span>master program</li>
										<li>
											<span className="fa fa-check-square-o" aria-hidden="true"></span>fully certified courses</li>

									</ul>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="htmlForm-demo">
							<div className="htmlForm-inner text-center">
								<fieldset>
									<legend>join the course</legend>

									<ul className="htmlForm-demo-list">
										<li>
											<span className="fa fa-check" aria-hidden="true"></span>lorem ipsum is a dummy text </li>
										<li>
											<span className="fa fa-check" aria-hidden="true"></span>lorem ipsum is a dummy text </li>
										<li>
											<span className="fa fa-check" aria-hidden="true"></span>lorem ipsum is a dummy text </li>
									</ul>
									<a href="#" data-toggle="modal" data-target="#myModal">sign up</a>
								</fieldset>
							</div>
							<h6>most advanced solution htmlFor
					<span className="demo-ftxt"> e-learning!</span>
							</h6>
						</div>
						<div className="demo-inst demo-sec">
							<h6 className="sec-title">about the
					<span>instructor</span>
							</h6>
							<div className="col-md-5 left-instr">
								<div className="col-md-5 demo-inst-left">
									<img src="images/i1.png" className="img-responsive" alt="" />
									<div className="inst-txt">
										<h5>Helen L. Odom</h5>
										<p>designation in detail</p>
									</div>
								</div>
								<div className="col-md-7 demo-inst-center ">
									<ul>
										<li>
											<i className="fa fa-star" aria-hidden="true"></i>
											<span>4.7</span> average rating</li>
										<li>
											<i className="fa fa-comment-o" aria-hidden="true"></i>
											<span>75,000</span> reviews</li>
										<li>
											<i className="fa fa-play" aria-hidden="true"></i>
											<span>19</span> courses</li>
										<li>
											<i className="fa fa-user" aria-hidden="true"></i>
											<span>34,826</span> students</li>

									</ul>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="col-md-7 demo-inst-right">
								<h6>Best Lead Educator</h6>
								<p>Nunc gravida sagittis nunc, pellentesque vehicula lacus viverra quis. Fusce ultricies velit nibh, ut aliquet elit hendrerit
									ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper augue iaculis fermentum ultrices. Nullam
									nec faucibus odio. Donec at dui ut tellus pharetra congue a at tellus. Sed facilisis est et est eleifend, a iaculis
									massa maximus. Pellentesque condimentum lorem maximus justo blandit eleifend.
					</p>
								<a href="#">view more</a>
							</div>

							<div className="clearfix"></div>

						</div>
						<div className="demo-sec">
							<div className="reviews col-md-8 col-sm-8">
								<h6 className="sec-title">student
						<span>review</span>
								</h6>

								<Student_review />
								<Student_review />
								<Student_review />
								<Student_review />

							</div>
							<div className="col-md-4 col-sm-4 sidebar-demo">
								<h6 className="sec-title1">you can also
						<span>refer</span>
								</h6>
								<div className="carousel slide materialf-slider" id="myCarousel1">
									<div className="carousel-inner">
										<div className="item active">
											<ul className="thumbnails">
												<Course_card cls="demo-car" />
												<Course_card />
												<Course_card />
												<Course_card />
												<Course_card />
												<Course_card />
												<Course_card />
											</ul>
										</div>
										<div className="item">
											<ul className="thumbnails">
												<Course_card cls="demo-car" />
												<Course_card />
												<Course_card />
												<Course_card />
												<Course_card />
												<Course_card />
												<Course_card />
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
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default course_details;