import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { Menu, Icon, Input, Anchor, Badge, Avatar, Popconfirm, message, Row, Col } from 'antd';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import { menuCat, search, checkAuth, Logout, searchByfilters, userProfile } from '../../actions';
import { stack as Menu1 } from 'react-burger-menu'
import LanguageToggle from '../language_toggle/language_toggle';
import { Translate } from "react-localize-redux";

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const Link1 = Anchor.Link;



class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { current: 'mail', isOpen: false, hideNav: true, search_value: '' }

	}
	componentWillMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ hideNav: window.innerWidth <= 900, isOpen: false });
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSearch(value) {
		if (this.props.location.pathname === '/search') {
			this.props.history.replace({ pathname: '/search', search: value });
			window.location.reload(true)
		}
		else
			this.props.history.push({ pathname: '/search', search: value });

	}

	handleClick = (e) => {
		this.setState({
			current: e.key, isOpen: false
		});
	}


	render() {

		const text = <Translate id="header.popConfirm.logout" />;

		return (
			<header >
				<LoadingBar showFastActions={true} style={{ zIndex: '100000' }} />

				<div className="navbar navbar-default navbar-fixed-top  animated fadeIn header-shadow"  id="home">
					<Row type="flex" justify="space-between" align="middle" style={{ flexDirection: this.props.language === 'ar' ? 'row-reverse' : '' ,padding:'0px 10px'}} className="header_topw3layouts_bar" >
						{this.state.hideNav ? <Col  > <a style={{ color: 'white' }} onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }}  >	<i className="fa fa-bars fa-2x"></i> </a> </Col> : ''}
						{this.state.hideNav ? <Col   >
							<a onClick={() => { this.props.history.push('/home'); this.setState({ current: 'mail' }) }} > <img height="50px" src="/images/cbclogo.png" /> </a>
						</Col> : ''}


						{!this.state.hideNav ?
							<Col   >
								<a onClick={() => { this.props.history.push('/home'); this.setState({ current: 'mail' }) }} > <img height="50px" src="/images/cbclogo.png" /> </a>
							</Col> : ''}
						{!this.state.hideNav ?
							<Col  >
								<LanguageToggle />
							</Col> : ''}
						{!this.state.hideNav ?
							<Col  style={{ whiteSpace: 'nowrap' }} >
								<Icon type="mobile" /> +(010) 221 918 811
									</Col> : ''}
						{!this.state.hideNav ?

							<Col style={{ whiteSpace: 'nowrap' }} >
								<Icon type="mail" /> info@example.com
								</Col> : ''}
						{!this.state.hideNav ?

							<Col lg={6} xl={8} md={5} className="animated fadeIn" style={{ direction: this.props.language === 'ar' ? 'rtl' : 'ltr' }} >
								<Search
									placeholder={this.props.language === 'ar' ? 'ابحث في الكورسات' : 'Search for courses'}
									onSearch={value => this.handleSearch(value)}
									enterButton

								/>
								{/* <Button type="primary" onClick={() => { this.handleSearch(this.state.search_value) }} > <Icon type="search" /> </Button> */}
							</Col> : ''}

						<Col  >
							{this.props.Authentication.status ? <div>
								<Link to={{ pathname: '/profile' }} >	{!this.props.profile.image ?
									<Avatar style={{ color: 'white', backgroundColor: '#e34b11', marginRight: '5px' }}> {this.props.profile.username ? this.props.profile.username.toLocaleUpperCase().charAt(0) : ''} </Avatar> : <Avatar style={{ marginRight: '5px' }} src={this.props.profile.image} />}</Link>
								<Popconfirm prefixCls="logout ant-popover" placement="bottomRight" style={{ padding: 20 }} title={text} onCancel={() => { this.props.Logout(); this.props.history.push('/home'); message.info('Logged out'); }} okText={<Translate id="button.no" />} cancelText={<Translate id="button.yes" />} >
									<a style={{ color: 'white', fontSize: '20px', letterSpacing: 0.5 }} >
										<Translate id="header.logout" /></a> </Popconfirm> </div> : <Link style={{ color: 'white', fontSize: '20px', letterSpacing: 0.5 }} to={{ pathname: '/login_signup', state: { modal: true } }} className="log" ><Translate id="header.login" /></Link>}
						</Col>



						{this.props.Authentication.status && !this.state.hideNav ?
							<Col   >
								<Link style={{ color: 'white' }} to="/checkout">
									<button className="s" >
										<i className="fa fa-shopping-cart fa-2x" > {this.props.shopcarts.size > 0 ? <span className="badge" > {this.props.shopcarts.size} </span> : ''} </i>
									</button>
								</Link>
							</Col>
							: ''}





					</Row>
					{this.state.hideNav ?
						<Row style={{ background: '#d3d3d333', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }} >

							<Search
								placeholder={this.props.language === 'ar' ? 'ابحث في الكورسات' : 'Search for courses'}
								onSearch={value => this.handleSearch(value)}
								enterButton

							/>
						</Row> : ''}
					{this.state.hideNav ?
						<Menu1 isOpen={this.state.isOpen} onStateChange={(e) => { this.setState({ isOpen: e.isOpen }) }} right={this.props.language === 'ar'}  >
							{this.props.Authentication.status ?
								<div style={{ textAlign: 'center' }} >
									{!this.props.profile.image ? <Avatar className="large-avatar" prefixCls="large-avatar" size="large" style={{ color: 'white', backgroundColor: '#e34b11', marginRight: '5px', width: '100px', height: '100px', borderRadius: '50px' }}> {this.props.profile.username ? this.props.profile.username.toLocaleUpperCase().charAt(0) : ''} </Avatar> : <Avatar className="large-avatar" size="large" style={{ marginRight: '5px' }} src={this.props.profile.image} />}

									<h3 style={{ marginTop: '10px' }} >	{this.props.profile.username ? this.props.profile.username.toLocaleUpperCase() : ''} </h3>
								</div> : ''}
							<Menu
								className="sidebar"
								onClick={this.handleClick}
								selectedKeys={[this.state.current]}
								mode="inline"
								style={{ direction: this.props.language === 'ar' ? 'rtl' : '', border: 'none' }}
							>

								<SubMenu title={<span><Translate id="header.courses" /></span>}>
									<Anchor bounds={100} offsetTop={150} showInkInFixed={true} affix={false}>

										<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#new_courses" title={<Translate id="header.courses.new" />} />  </div>										
										<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#popular_courses" title={<Translate id="header.courses.popular" />} />  </div>
										<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#offered_courses" title={<Translate id="header.courses.offered" />} /> </div>										
										<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#rated_courses" title={<Translate id="header.courses.rated" />} />  </div>

									</Anchor>

								</SubMenu>

								<SubMenu title={<span  ><Translate id="header.categories" /></span>}>

									{this.props.header.categories.map(e => {
										return e.subcategories.length > 0 ? <SubMenu key={e.id} title={<Link to={{ pathname: `/courses/category/${e.id}` }} > <span > {this.props.language === 'ar' ? e.attr2 : e.attr1} </span> </Link>} >
											{e.subcategories.map(e1 => { return <Menu.Item key={e1.id} > <Link to={{ pathname: `/courses/category/${e.id}/${e1.id}` }} > {this.props.language === 'ar' ? e1.attr2 : e1.attr1} </Link> </Menu.Item> })}
										</SubMenu> : <Menu.Item key={e.id}  > <Link to={{ pathname: `/courses/category/${e.id}` }} > {this.props.language === 'ar' ? e.attr2 : e.attr1} </Link> </Menu.Item>
									})}
								</SubMenu>

								{this.props.Authentication.status ? <SubMenu title={<span><Translate id="header.my.account" /></span>}>
									<Menu.Item key="profile">
										<Link to={{ pathname: '/profile' }} >
											<Translate id="header.my.profile" />
										</Link>
									</Menu.Item>
									<Menu.Item key="wishlist">
										<Link to={{ pathname: '/wish' }} >

											<Translate id="header.my.wish.list" />
										</Link>
									</Menu.Item>
									<Menu.Item key="enrollments">
										<Link to={{ pathname: '/enrollments' }} >
											<Translate id="header.my.courses" />
										</Link>
									</Menu.Item>
								</SubMenu>


									: ''}
								<Menu.Item key="notifications">
									<Link to={{ pathname: '/notifications' }} >
										<Badge dot >
											<Translate id="header.notifications" /> <Icon type="notification" />
										</Badge>
									</Link>
								</Menu.Item>
								<Menu.Item key="checkout">
									<Link to={{ pathname: '/checkout' }} >

										<Badge dot={true} count={this.props.shopcarts.size}>
											<Translate id="header.shopcart" />  <Icon type="shopping-cart" />
										</Badge>
									</Link>
								</Menu.Item>
								<Menu.Item key="about">
									<Link to={{ pathname: '/about' }} >

										<Translate id="header.about" />  <Icon type="mail" />
									</Link>
								</Menu.Item>
								<Menu.Item key="contact">
									<Link to={{ pathname: '/contact' }} >

										<Translate id="header.contact" />  <Icon type="mobile" />

									</Link>
								</Menu.Item>
							</Menu>
						</Menu1> :
						<Menu
						className="header-shadow"
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							prefixCls={this.props.language === 'ar' ? 'arabic-submenu ant-menu' : 'ant-menu'}
							mode="horizontal"
							style={{ color: 'white', display: 'flex', justifyContent: 'space-around', backgroundColor: '#090c2d', direction: this.props.language === 'ar' ? 'rtl' : 'ltr',borderBottom:0 }}
						>

							<SubMenu title={<span><Translate id="header.courses" /> <Icon type="arrow-down" /></span>}>
								<Anchor bounds={100} offsetTop={150} showInkInFixed={true} affix={false}>
									<Link1 href="/home#new_courses" title={<Translate id="header.courses.new" />} />
									<Link1 href="/home#popular_courses" title={<Translate id="header.courses.popular" />} />
									<Link1 href="/home#offered_courses" title={<Translate id="header.courses.offered" />} />
									<Link1 href="/home#rated_courses" title={<Translate id="header.courses.rated" />} />
								</Anchor>

							</SubMenu>

							<SubMenu title={<span  ><Translate id="header.categories" /> <Icon type="arrow-down" /></span>}>

								{this.props.header.categories.map(e => {
									return e.subcategories.length > 0 ? <SubMenu key={e.id} title={<Link style={{ color: 'black' }} to={{ pathname: `/courses/category/${e.id}` }} > <span > {this.props.language === 'ar' ? e.attr2 : e.attr1} </span> </Link>} >
										{e.subcategories.map(e1 => { return <Menu.Item key={e1.id} > <Link to={{ pathname: `/courses/category/${e.id}/${e1.id}` }} > {this.props.language === 'ar' ? e1.attr2 : e1.attr1} </Link> </Menu.Item> })}
									</SubMenu> : <Menu.Item key={e.id}  > <Link to={{ pathname: `/courses/category/${e.id}` }} > {this.props.language === 'ar' ? e.attr2 : e.attr1} </Link> </Menu.Item>
								})}
							</SubMenu>

							{this.props.Authentication.status ? <SubMenu title={<span><Translate id="header.my.account" /> <Icon type="arrow-down" /></span>}>
								<Menu.Item key="profile">
									<Link style={{ color: 'black' }} to={{ pathname: '/profile' }} >

										<Icon type="user" /> <Translate id="header.my.profile" />
									</Link>
								</Menu.Item>
								<Menu.Item key="wishlist">
									<Link style={{ color: 'black' }} to={{ pathname: '/wish' }} >

										<Icon type="heart" /> <Translate id="header.my.wish.list" />
									</Link>
								</Menu.Item>
								<Menu.Item key="enrollments">
									<Link style={{ color: 'black' }} to={{ pathname: '/enrollments' }} >
										<Icon type="database" /> <Translate id="header.my.courses" />
									</Link>
								</Menu.Item>
								<Menu.Item key="notifications"> <Link style={{ color: 'black' }} to={{ pathname: '/notifications' }} > <Icon type="notification" /> <Translate id="header.notifications" /> </Link> </Menu.Item>
							</SubMenu> : ''}

							<Menu.Item key="about">
								<Link style={{ color: 'white' }} to={{ pathname: '/about' }} >
									<Translate id="header.about" />  <Icon type="mail" />
								</Link>
							</Menu.Item>
							<Menu.Item key="contact">
								<Link style={{ color: 'white' }} to={{ pathname: '/contact' }} >
									<Translate id="header.contact" />  <Icon type="mobile" />
								</Link>
							</Menu.Item>
						</Menu>
					}

				</div>

			</header>
		);
	}
}

function mapStateToProps(state) {
	return {
		header: state.header,
		Authentication: state.Authentication,
		shopcarts: state.shop_carts,
		loading: state.loadingBar,
		profile: state.profile.profile,
		language: state.language.code
	};
}


export default connect(mapStateToProps, { menuCat, search, checkAuth, Logout, searchByfilters, userProfile })(Header);