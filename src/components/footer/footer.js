import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import {connect} from 'react-redux';
import {searchByfilters,shopCarts,wishList} from '../../actions/index'
import Signup_news from '../signup_news_letter/signup_news';
import { Translate } from '../../../node_modules/react-localize-redux';
import LanguageToggle from '../language_toggle/language_toggle';
class Footer extends Component {
	
	render() {
		return (
			<div>
				{/* Footer */}
				{/* <Signup_news /> */}
				<Signup_news />
				{/* <Signup_news /> */}
				<div className="footer_agileinfo_topf">
					<div className="container">
						<div className="col-md-4 footer_w3layouts_gridf">
							<h2>
								<a href="/home" >CBC Centers</a>
							</h2>
							<p className="paragraphf"> <Translate id="footer.desc" /> </p>
						</div>
						<div className="col-md-4 footer_w3layouts_gridf">
							<nav>
								<ul className="footer_w3layouts_gridf_list">
									<li>
										<span className="fa fa-angle-right" aria-hidden="true"></span>
									 <LanguageToggle />
									</li>
								
								</ul>
							</nav>
						</div>
						<div className="col-md-4 footer_w3layouts_gridf">
							<nav>
								<ul className="footer_w3layouts_gridf_list">

									<li>
										<span className="fa fa-angle-right" aria-hidden="true"></span>
										<Link to="/about"><Translate id="header.about" /></Link>
									</li>
									<li>
										<span className="fa fa-angle-right" aria-hidden="true"></span>
										<Link to="/terms"> <Translate id="footer.terms" /> </Link>
									</li>
									<li>
										<span className="fa fa-angle-right" aria-hidden="true"></span>
										<Link to="/contact"> <Translate id="header.contact" /> </Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="clearfix"> </div>
						<div className="w3ls-fsocial-grid">
							<h3 style={{color:'white'}} className="sub-w3ls-headf"> <Translate id="footer.follow.us" /> </h3>
							<div className="social-ficons">
								<ul>
									<li>
										<a href="#">
											<span className="fa fa-facebook"></span> Facebook</a>
									</li>
									<li>
										<a href="#">
											<span className="fa fa-twitter"></span> Twitter</a>
									</li>
									<li>
										<a href="#">
											<span className="fa fa-google"></span>Google</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-wthree-copyf">
					<div className="container">
						<div className="addressf-agileits-w3layouts">
							<p>
								<span className="fa fa-map-marker" aria-hidden="true"></span>Ehrenfeld Gutenbergstr. Cologne, Germany.</p>
						</div>
						<p><Translate id="footer.copy.right" />
						</p>
						<div className="clearfix"> </div>
					</div>
				</div>

				{/* Footer */}
			</div>
		);
	}
}

function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps,{searchByfilters,shopCarts,wishList}) (Footer);