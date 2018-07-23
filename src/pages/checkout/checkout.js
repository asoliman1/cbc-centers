import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './checkout.css';
import { connect } from 'react-redux';
import {
	removeShopItem,
	shopCarts,
	courseEnrollAll
} from '../../actions'
import { Spin} from 'antd';


class checkout extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		window.scrollTo(0, 0);

	}

	componentDidMount() {
		this.props.shopCarts()
	}

	render() {
		return (
			<div className="checkout-page" >
				<div className="innerf-pages">
					<div className="container">
					{this.props.loading.shopcarts===1 ? <div style={{textAlign:'center'}} >  <Spin size="large" /></div>:''}
						<div className="privacy about">
							<h3>Chec<span>kout</span></h3>

							<div className="checkout-right">
								<h4>Your shopping cart contains: <span>{this.props.shopcarts.size} Courses</span></h4>
								{this.props.shopcarts.content.map((e, i) => {
									return e.items.length > 0 ? <div key={e.id} > <h2 style={{ marginBottom: '10px' }} > Shop cart #{i + 1} </h2> <table style={{ marginBottom: '20px' }} className="timetable_sub">
										<thead>
											<tr>
												<th>SL No.</th>
												<th>Course</th>
												<th>Course Name</th>
												<th>Price</th>
												<th>Remove</th>
											</tr>
										</thead>
										<tbody>
											{e.items.map((e1, ind) => {
												return <tr key={ind} className="rem1">
													<td className="invert"> {ind + 1} </td>
													<td className="invert-image"><a ><img src={e1.course_details.image?e1.course_details.image:'./images/error.jpg'} onError={(e) => { e.target.src = './images/error.jpg' }} className="img-responsive" /></a></td>

													<td className="invert">{e1.course_details.name_e}</td>

													<td className="invert">${e1.price}</td>
													<td className="invert">
														<div className="rem" onClick={() => { this.props.removeShopItem(e1.id, i) }} >
															<div className="close1"> </div>
														</div>

													</td>
												</tr>
											})}

										</tbody>
									</table> </div> : ''
								})}

							</div>
							<div className="checkout-left">
								<div className="col-md-4 checkout-left-basket">
									<h4>Total Price</h4>
									<ul  >
										{this.props.shopcarts.content.map(e => {
											return e.items.length > 0 ?
												e.items.map(e1 => {
													return <li key={e1.course_details.name_e+'price'} >{e1.course_details.name_e} <i></i> <span>${e1.price}</span></li>
												})
												: ''
										})}
										<li> Total : {this.props.shopcarts.total_price} </li>
									</ul>
									<div className="checkout-right-basket">
										<a onClick={()=>{this.props.courseEnrollAll()}} >Enroll Courses</a>
									</div>
								</div>
								<div className="col-md-8 address_form">
									{/* <h4>Add a new Details</h4> */}
									{/* <form action="payment.html" method="post" className="creditly-card-form shopf-sear-headinfo_form">
							<section className="creditly-wrapper wrapper">
								<div className="information-wrapper">
									<div className="first-row form-group">
										<div className="controls">
											<label className="control-label">Full name: </label>
											<input className="billing-address-name form-control" type="text" name="name" placeholder="Full name"/>
										</div>
										<div className="card_number_grids">
											<div className="card_number_grid_left">
												<div className="controls">
													<label className="control-label">Mobile number:</label>
													<input className="form-control" type="text" placeholder="Mobile number"/>
												</div>
											</div>
											<div className="card_number_grid_right">
												<div className="controls">
													<label className="control-label">Landmark: </label>
													<input className="form-control" type="text" placeholder="Landmark"/>
												</div>
											</div>
											<div className="clear"> </div>
										</div>
										<div className="controls">
											<label className="control-label">Town/City: </label>
											<input className="form-control" type="text" placeholder="Town/City"/>
										</div>
										<div className="controls">
											<label className="control-label">Address type: </label>
											<select className="form-control option-fieldf">
																							<option>Office</option>
																							<option>Home</option>
																							<option>Commercial</option>
							
																					</select>
										</div>
									</div>
									<button className="submit check_out">Delivery to this Address</button>
								</div>
							</section>
						</form> */}

								</div>

								<div className="clearfix"> </div>

							</div>

						</div>

					</div>
				</div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return { shopcarts: state.shop_carts, loading: state.loadingBar }
}

export default connect(mapStateToProps, { removeShopItem, shopCarts,courseEnrollAll })(checkout);