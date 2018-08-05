import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import CountUp from 'react-countup';
import Instructor from '../../components/instructor/instructor';
import Reviews from '../../components/reviews/reviews';
import { Translate } from "react-localize-redux";

class about extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		window.scrollTo(0, 0)

		return (
			<div>
			
				<div className="about-ftop-inn">
					<div className="container">
						<h3 className="tittlef-agileits-w3layouts"> <Translate id="header.config"  /> About Us</h3>
						<div className="abt-img">
							<h3 className="sub-w3ls-headf white-clrf">Shortly about CBC Centers Coaching Sessions.</h3>
						</div>
						<div className="abtf-info">
							<div className="about-grids">
								<h5>Why choose us</h5>
								<p className="paragraphf"><span className="fa fa-repeat" aria-hidden="true"></span> 30+ Years of experience</p>
								<p className="paragraphf"><span className="fa fa-repeat" aria-hidden="true"></span> Range of coaching</p>
								<p className="paragraphf"><span className="fa fa-repeat" aria-hidden="true"></span> Books, DVD's, Podcasts</p>
								<p className="paragraphf"><span className="fa fa-repeat" aria-hidden="true"></span> Pricing's Affordability</p>
							</div>
							<div className="about-grids">
								<h5>Coaching strategy sessions</h5>
								<p className="paragraphf">Vestibulum mi ligula, bibendum quis leo at, euismod cursus tortor. Etiam vulputate enim id est suscipit tincidunt. In
						lectus lectus, euismod eu lacus non, blandit imperdiet nulla. </p>
							</div>
							<div className="about-grids">
								<h5>success coaching programs</h5>
								<p className="paragraphf">Curabitur posuere enim nec ante varius volutpat. Aenean ipsum elit, ultrices mollis purus quis, aliquet faucibus ex.
						Aenean vel elementum lectus, sit amet euismod lorem.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="stats-f">
					<div className="container">
						<h3 className="tittlef-agileits-w3layouts white-clrf">Things that make our coaching the best</h3>
						<div className="stats-f_inner_grids">
							<div className="col-md-6">
								<h3 className="sub-w3ls-headf white-clrf">30+ Years of experience</h3>
								<p className="paragraphf white-clrf ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tristique est, et egestas odio. Mauris ac tristique
						arcu, interdum risus.Integer quis tristique.</p>
								<div className="stats-f_left counter_grid">
									<span className="fa fa-book" aria-hidden="true"></span>
									<p className="counter"> <CountUp duration={50}  start={0} end={145} /> </p>
									<h4>Courses</h4>
								</div>
								<div className="stats-f_left counter_grid1">
									<span className="fa fa-users" aria-hidden="true"></span>
									<p className="counter"> <CountUp duration={50} start={0} end={365} /> </p>
									<h4>Happy clients</h4>
								</div>
							</div>
							<div className="col-md-6">
								<div className="stats-f_left counter_grid2">
									<span className="fa fa-user-plus" aria-hidden="true"></span>
									<p className="counter"> <CountUp duration={50} start={0} end={563} />  </p>
									<h4>People loved</h4>
								</div>
								<div className="stats-f_left counter_grid3">
									<span className="fa fa-trophy" aria-hidden="true"></span>
									<p className="counter"> <CountUp duration={50} start={0} end={1045} />  </p>
									<h4>Awards won</h4>
								</div>
								<h3 className="sub-w3ls-headf white-clrf">Success coaching programs</h3>
								<p className="paragraphf white-clrf ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tristique est, et egestas odio. Mauris ac tristique
						arcu, interdum risus.Integer quis tristique.</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>

				<div className="finner_team">
					<h3 className="tittlef-agileits-w3layouts">Instructors</h3>
					<div className="col-md-6 teamf-left">
						<Instructor />
						<Instructor />
						<Instructor />
						<Instructor />
					</div>
					<div className="col-md-6 teamf-right">
						<Reviews />
						<Reviews />
						<Reviews />
						<Reviews />
					</div>
					<div className="clearfix"> </div>
				</div>

			</div>
		);
	}
}

export default about;