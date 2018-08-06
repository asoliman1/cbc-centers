import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './header.css';
import { Layout, Menu, Icon, Tooltip, Input, Button, Anchor, Badge, Avatar, Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import { menuCat, search, checkAuth, Logout, searchByfilters, userProfile } from '../../actions';
import { stack as Menu1 } from 'react-burger-menu'
import LanguageToggle from '../language_toggle/language_toggle';
import { Translate } from "react-localize-redux";

const { Content, Footer, Sider } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Link1 = Anchor.Link;



class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { current: 'mail', isOpen: false, hideNav: true, search_value: '' }

	}
	componentWillMount() {
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
		this.props.menuCat();

	}
	resize() {
		this.setState({ hideNav: window.innerWidth <= 600 });

	}

	componentDidMount() {
		if (this.props.Authentication.status)
			this.props.userProfile()
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
			current: e.key,
		});
		switch (e.key) {
			case 'contact':
				this.props.history.push('/contact');
				this.setState({ isOpen: false })
				break;
			case 'about':
				this.props.history.push('/about');
				this.setState({ isOpen: false })
				break;
			case 'profile':
				this.setState({ isOpen: false })
				this.props.history.push('/profile');
				break;
			// case 'notifications':
			// 	this.setState({ isOpen: false })
			// 	this.props.history.push('/notifications');
			// 	break;
			case 'wishlist':
				this.setState({ isOpen: false })
				this.props.history.push('/wish');
				break;
			case 'enrollments':
				this.setState({ isOpen: false })
				this.props.history.push('/enrollments');
				break;
		}

		if (e.keyPath[2] === 'item_1') {
			if (this.props.location.pathname === '/search') {
				this.props.history.replace({ pathname: '/search', state: { sub_categories: e.key }  });
				window.location.reload(true)
			}
			else
				this.props.history.push({ pathname: '/search', state: { sub_categories: e.key }  })
		}
	}


	render() {

		const text = <Translate id="header.popConfirm.logout" />;

		return (
			<header>
				<LoadingBar showFastActions={true} style={{ zIndex: '100000' }} />

				<div className="navbar navbar-default navbar-fixed-top" id="home">



					<div className="header_topw3layouts_bar">
						<div className="container">
							{this.state.hideNav ? <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: this.props.language === 'ar' ? 'row-reverse' : '' }} > <Button className="menu-button" type="ghost" onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }}  >	<Icon style={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }} type="bars" /> </Button>
								<div className="logof-w3-agile"  >
									<a onClick={() => { this.props.history.push('/home'); this.setState({ current: 'mail' }) }} > <img height="50px" src="/images/cbclogo.png" /> </a>

								</div>
								<div className="header_right" style={{ float: this.props.language === 'ar' ? 'left' : 'right' }} >
									{this.props.Authentication.status ? <div>
										<Link to={{ pathname: '/profile' }} >	{!this.props.profile.image ?
											<Avatar style={{ color: 'white', backgroundColor: '#e34b11', marginRight: '5px' }}> {this.props.profile.username ? this.props.profile.username.toLocaleUpperCase().charAt(0) : ''} </Avatar> : <Avatar style={{ marginRight: '5px' }} src={this.props.profile.image} />}</Link>
										<Popconfirm placement="bottomRight" title={text} onConfirm={() => { this.props.Logout(); this.props.history.push('/home'); message.info('Logged out'); }} okText="Yes" cancelText="No">
											<a className="log"  >
												<Translate id="header.logout" /></a> </Popconfirm> </div> : <Link to={{ pathname: '/login_signup', state: { modal: true } }} className="log" ><Translate id="header.login" /></Link>}
								</div>
							</div> : ''}

							<div className="header_agileits_left" style={{ float: this.props.language === 'ar' ? 'right' : 'left' }} >
								<ul>
									<li>
										<LanguageToggle />
									</li>
									<li>
										<i className="fa fa-phone" aria-hidden="true"></i> +(010) 221 918 811</li>
									<li>
										<i className="fa fa-envelope-o" aria-hidden="true"></i>
										<a href="mailto:info@example.com">info@example.com</a>
									</li>
								</ul>
							</div>
							{!this.state.hideNav ?
								<div className="header_right" style={{ float: this.props.language === 'ar' ? 'left' : 'right' }} >
									{this.props.Authentication.status ? <div>
										<Link to={{ pathname: '/profile' }} >	{!this.props.profile.image ?
											<Avatar style={{ color: 'white', backgroundColor: '#e34b11', marginRight: '5px' }}> {this.props.profile.username ? this.props.profile.username.toLocaleUpperCase().charAt(0) : ''} </Avatar> : <Avatar style={{ marginRight: '5px' }} src={this.props.profile.image} />}		</Link>
										<Popconfirm placement="bottomRight" title={text} onConfirm={() => { this.props.Logout(); this.props.history.push('/home'); }} okText={<Translate id="button.ok" />} cancelText={<Translate id="button.no" />}>
											<a className="log"  >
												<Translate id="header.logout" />  </a> </Popconfirm> </div> : <Link to={{ pathname: '/login_signup', state: { modal: true } }} className="log" ><Translate id="header.login" /></Link>}


								</div>
								: ''}



						</div>
					</div>
					<div className="header-middle">
						{!this.state.hideNav ?
							<div className="logof-w3-agile" style={{ float: this.props.language === 'ar' ? 'right' : 'left', marginRight: this.props.language === 'ar' ? '50px' : '20px', marginLeft: this.props.language === 'ar' ? '20px' : '' }} >
								<a onClick={() => { this.props.history.push('/home'); this.setState({ current: 'mail' }) }} > <img height="50px" src="/images/cbclogo.png" /> </a>
							</div>
							: ''}
						<div className="container">

							<div className=" animated fadeIn" style={{ display: 'inline-flex', direction: this.props.language === 'ar' ? 'rtl' : 'ltr', float: this.props.language === 'ar' ? 'right' : 'left', padding: 7, width: '80%' }} >
								<Search
									placeholder={this.props.language === 'ar' ? 'ادخل كلمه للبحث' : 'Search text'}
									onSearch={value => this.handleSearch(value)}
									enterButton

								/>
								{/* <Button type="primary" onClick={() => { this.handleSearch(this.state.search_value) }} > <Icon type="search" /> </Button> */}


							</div>
							{this.props.Authentication.status ?
								<div className="cart-mainf" style={{ float: this.props.language === 'ar' ? 'left' : 'right' }} >
									<Link to="/checkout">
										<button className="btn s" >
											<i className="fa fa-shopping-cart fa-2x" > {this.props.shopcarts.size > 0 ? <span className="badge" > {this.props.shopcarts.size} </span> : ''} </i>
										</button>
									</Link>
									{/* <Link to="/notifications" >
										<button className="btn s" >
											<i className="fa fa-bell fa-2x" >    </i>
										</button>
									</Link> */}
								</div>
								: ''}

						</div>
					</div>
					<Menu1 right={this.props.language === 'ar'} isOpen={this.state.isOpen} burgerButtonClassName="burgerbutton" >
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="inline"
							style={{ color: 'black' }}
						>

							<SubMenu title={<span><Translate id="header.courses" /></span>}>
								<Anchor bounds={100} offsetTop={150} showInkInFixed={true} affix={false}>

									<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#offered_courses" title={<Translate id="header.courses.offered" />} /> </div>
									<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#popular_courses" title={<Translate id="header.courses.popular" />} />  </div>
									<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#rated_courses" title={<Translate id="header.courses.rated" />} />  </div>
									<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#new_courses" title={<Translate id="header.courses.new" />} />  </div>

								</Anchor>

							</SubMenu>

							<SubMenu title={<span><Translate id="header.categories" /> </span>}>

								{this.props.header.categories.map(e => {
									return e.subcategories.length > 0 ? <SubMenu key={e.id} title={<span onClick={() => {
									
									if (this.props.location.pathname === '/search') {
										this.props.history.replace({ pathname: '/search', state: { categories: e.id }  });
										window.location.reload(true)
									}
									else
										this.props.history.push({ pathname: '/search', state: { categories: e.id }  });
									}}  > {this.props.language === 'ar' ? e.attr2 : e.attr1} </span>} >
										{e.subcategories.map(e1 => { return <Menu.Item key={e1.id} >{this.props.language === 'ar' ? e1.attr2 : e1.attr1}</Menu.Item> })}
									</SubMenu> : <Menu.Item key={e.id}  >{this.props.language === 'ar' ? e.attr2 : e.attr1}</Menu.Item>
								})}
							</SubMenu>

							{this.props.Authentication.status ? <SubMenu title={<span><Translate id="header.my.account" /></span>}>
								<Menu.Item key="profile"><Translate id="header.my.profile" /></Menu.Item>
								<Menu.Item key="wishlist"><Translate id="header.my.wish.list" /></Menu.Item>
								<Menu.Item key="enrollments"><Translate id="header.my.courses" /></Menu.Item>
								{/* <Menu.Item key="notifications"><Translate id="header.notifications" /></Menu.Item> */}
							</SubMenu>


								: ''}
							{/* <Menu.Item key="notifications">
								<Badge dot count={100}>
									<a style={{ color: 'black' }} >
										<Icon type="notification" /> <Translate id="header.notifications" /> </a>
								</Badge>
							</Menu.Item> */}
							<Menu.Item key="checkout">
								<Badge overflowCount={10} count={this.props.shopcarts.size}>
									<Icon type="shopping-cart" />  <Translate id="header.shopcart" />
								</Badge>

							</Menu.Item>
							<Menu.Item key="about">
								<Icon type="mail" />  <Translate id="header.about" />
							</Menu.Item>
							<Menu.Item key="contact">
								<Icon type="mobile" />  <Translate id="header.contact" />
							</Menu.Item>
						</Menu>
					</Menu1>

					{!this.state.hideNav ?
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="horizontal"
							style={{ color: 'white', display: 'flex', justifyContent: 'space-around', backgroundColor: '#090c2d', direction: this.props.language === 'ar' ? 'rtl' : 'ltr' }}
						>

							<SubMenu   title={<span><Translate id="header.courses" /> <Icon type="arrow-down" /></span>}>
								<Anchor bounds={100} offsetTop={150} showInkInFixed={true} affix={false}>
									<Link1 href="/home#new_courses" title={<Translate id="header.courses.new" />} />
									<Link1 href="/home#popular_courses" title={<Translate id="header.courses.popular" />} />
									<Link1 href="/home#offered_courses" title={<Translate id="header.courses.offered" />} />
									<Link1 href="/home#rated_courses" title={<Translate id="header.courses.rated" />} />
								</Anchor>

							</SubMenu>

							<SubMenu title={<span  ><Translate id="header.categories" /> <Icon type="arrow-down" /></span>}>

								{this.props.header.categories.map(e => {
									return e.subcategories.length > 0 ? <SubMenu key={e.id} title={<span onClick={() => { 
										if (this.props.location.pathname === '/search') {
											this.props.history.replace({ pathname: '/search', state: { categories: e.id }  });
											window.location.reload(true)
										}
										else
											this.props.history.push({ pathname: '/search', state: { categories: e.id }  })
										
									 } } > {this.props.language === 'ar' ? e.attr2 : e.attr1} </span>} >
										{e.subcategories.map(e1 => { return <Menu.Item key={e1.id} >{this.props.language === 'ar' ? e1.attr2 : e1.attr1}</Menu.Item> })}
									</SubMenu> : <Menu.Item key={e.id}  >{this.props.language === 'ar' ? e.attr2 : e.attr1}</Menu.Item>
								})}
							</SubMenu>

							{this.props.Authentication.status ? <SubMenu title={<span><Translate id="header.my.account" /> <Icon type="arrow-down" /></span>}>
								<Menu.Item key="profile"><Icon type="user" /> <Translate id="header.my.profile" /></Menu.Item>
								<Menu.Item key="wishlist"><Icon type="heart" /> <Translate id="header.my.wish.list" /></Menu.Item>
								<Menu.Item key="enrollments"><Icon type="database" /> <Translate id="header.my.courses" /></Menu.Item>
								{/* <Menu.Item key="notifications"><Icon type="notification" /> <Translate id="header.notifications" /></Menu.Item> */}
							</SubMenu> : ''}

							<Menu.Item key="about">
								<Translate id="header.about" />  <Icon type="mail" />
							</Menu.Item>
							<Menu.Item key="contact">
								<Translate id="header.contact" />  <Icon type="mobile" />
							</Menu.Item>
						</Menu>
						: ''}

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
		profile: state.profile,
		language: state.language.code
	};
}


export default connect(mapStateToProps, { menuCat, search, checkAuth, Logout, searchByfilters, userProfile })(Header);