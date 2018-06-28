import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './header.css';
import { Layout, Menu, Icon, Tooltip, Input, Button, Anchor } from 'antd';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import { menuCat, search } from '../../actions';
import { stack as Menu1 } from 'react-burger-menu'

const { Content, Footer, Sider } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Link1 = Anchor.Link;



class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { auth: false, current: 'mail', isOpen: false, hideNav: true }
		this.checklogin = this.checklogin.bind(this);

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
		this.checklogin();
		console.log(this.props)
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSearch(value) {
		if (value === '' || typeof value === 'undefined') {

		} else {
			this.props.search(value, 0, 20);
			this.props.history.push({ pathname: '/search', search: value });
		}
	}

	handleClick = (e) => {
		console.log('click ', e);
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
			case 'notifications':
				this.setState({ isOpen: false })
				this.props.history.push('/notifications');

				break;
			case 'wishlist':
				this.setState({ isOpen: false })
				this.props.history.push('/wish');

				break;

		}
	}


	checklogin() {
		if (localStorage.getItem('api_token') !== null) {
			this.setState({ auth: true });
			console.log('auth :', localStorage.getItem('api_token'))

		} else {
			this.setState({ auth: false })
			console.log('auth :', localStorage.getItem('api_token'))

		}
	}

	logout() {
		localStorage.removeItem('api_token');
		this.setState({ auth: false });
	}

	render() {
		var isMenuOpen = function (state) {
			return state.isOpen;
		};
		return (
			<header>
				<LoadingBar showFastActions={true} style={{ zIndex: '100000' }} />

				<div className="navbar navbar-default navbar-fixed-top" id="home">



					<div className="header_topw3layouts_bar">
						<div className="container">
							{this.state.hideNav ? <Button className="menu-button" type="ghost" onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }}  >	<Icon style={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }} type="bars" /> </Button> : ''}
							{/* <Button className="menu-button" type="ghost" onClick={()=>{this.setState({isOpen:!this.state.isOpen})}}  >	<Icon style={{fontSize:'17px',color:'white',fontWeight:'bold'}} type="bars" /> </Button> */}

							<div className="header_agileits_left">
								<ul>
									<li>
										<i className="fa fa-phone" aria-hidden="true"></i> +(010) 221 918 811</li>
									<li>
										<i className="fa fa-envelope-o" aria-hidden="true"></i>
										<a href="mailto:info@example.com">info@example.com</a>
									</li>
								</ul>
							</div>

							<div className="header_right">
								{this.state.auth ? <a className="log" onClick={() => { this.logout() }} >Logout</a> : <Link to={{ pathname: '/login_signup', state: { modal: true } }} className="log" >Login</Link>}
							</div>

							{this.state.auth ? <div>
								<Link to="/checkout">
									<button className="btn r" >
										<i className="fa fa-shopping-cart fa-2x" > <span className="badge" >33</span>  </i>
									</button>
								</Link>
								<Link to="/notifications" >
									<button className="btn r" >
										<i className="fa fa-bell fa-2x" ><span className="badge" >33</span>    </i>
									</button>
								</Link>
							</div>
								: ''}


							{/* <div className="clearfix"> </div> */}
						</div>
					</div>
					<div className="header-middle">
						<div className="logof-w3-agile">
							<a onClick={() => { this.props.history.push('/home'); this.setState({ current: 'mail' }) }} > <img height="50px" src="/images/cbclogo.png" /> </a>
						</div>
						<div className="container">

							<div className="searchf-w3-agileits-headr">
								<Tooltip placement="right" title={'Enter text to search'}>
									<Search
										placeholder="input search text"
										onSearch={(value) => { this.handleSearch(value) }}
										enterButton
									/>
								</Tooltip>

							</div>
							{this.state.auth ?
								<div className="cart-mainf"  >
									<Link to="/checkout">
										<button className="btn s" >
											<i className="fa fa-shopping-cart fa-2x" > <span className="badge" >3</span>  </i>
										</button>
									</Link>
									<Link to="/notifications" >
										<button className="btn s" >
											<i className="fa fa-bell fa-2x" ><span className="badge" >33</span>    </i>
										</button>
									</Link>
								</div>
								: ''}

						</div>
					</div>
					<Menu1 onStateChange={isMenuOpen} isOpen={this.state.isOpen} burgerButtonClassName="burgerbutton" >
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="inline"
							style={{ color: 'black' }}
						>

							<SubMenu title={<span>Courses</span>}>
								<Anchor bounds={100} offsetTop={150} showInkInFixed={true} affix={false}>

									<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#offered_courses" title="Offered Courses" /> </div>
									<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#popular_courses" title="Popular Courses" />  </div>
									<div onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }} > <Link1 href="/home#rated_courses" title="Rated Courses" />  </div>

								</Anchor>

							</SubMenu>

							<SubMenu title={<span>Categories</span>}>
								{this.props.header.categories.map(e => {
									return e.subcategories.length > 0 ? <SubMenu key={e.id} title={<span> {e.aname} </span>} >
										{e.subcategories.map(e1 => { <Menu.Item key={e1.id} >{e1.aname}</Menu.Item> })}
									</SubMenu> : <Menu.Item key={e.id} >{e.aname}</Menu.Item>
								})}
							</SubMenu>

							{this.state.auth ? <SubMenu title={<span>My Profile</span>}>
								<MenuItemGroup title="Item 1">
									<Menu.Item key="profile">My Profile</Menu.Item>
								</MenuItemGroup>
								<MenuItemGroup title="Item 2">
									<Menu.Item key="wishlist">My WishList</Menu.Item>
									<Menu.Item key="courses">My Courses</Menu.Item>
									<Menu.Item key="notifications">My Notifications</Menu.Item>
								</MenuItemGroup>
							</SubMenu> : ''}

							<Menu.Item key="about">
								<Icon type="mail" />About
      				  </Menu.Item>
							<Menu.Item key="contact">
								<Icon type="mail" />Contact
      				  </Menu.Item>
						</Menu>
					</Menu1>

					{!this.state.hideNav ?
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="horizontal"
							style={{ color: 'white', display: 'flex', justifyContent: 'space-around', backgroundColor: '#090c2d' }}
						>

							<SubMenu title={<span>Courses <Icon type="arrow-down" /></span>}>
								<Anchor bounds={100} offsetTop={150} showInkInFixed={true} affix={false}>

									<Link1 href="/home#offered_courses" title="Offered Courses" />
									<Link1 href="/home#popular_courses" title="Popular Courses" />
									<Link1 href="/home#rated_courses" title="Rated Courses" />

								</Anchor>

							</SubMenu>

							<SubMenu title={<span>Categories <Icon type="arrow-down" /></span>}>
								{this.props.header.categories.map(e => {
									return e.subcategories.length > 0 ? <SubMenu key={e.id} title={<span> {e.aname} </span>} >
										{e.subcategories.map(e1 => { <Menu.Item key={e1.id} >{e1.aname}</Menu.Item> })}
									</SubMenu> : <Menu.Item key={e.id} >{e.aname}</Menu.Item>
								})}
							</SubMenu>

							{this.state.auth ? <SubMenu title={<span>My Profile <Icon type="arrow-down" /></span>}>
								<MenuItemGroup title="Item 1">
									<Menu.Item key="profile">My Profile</Menu.Item>
								</MenuItemGroup>
								<MenuItemGroup title="Item 2">
									<Menu.Item key="wishlist">My WishList</Menu.Item>
									<Menu.Item key="courses">My Courses</Menu.Item>
									<Menu.Item key="notifications">My Notifications</Menu.Item>
								</MenuItemGroup>
							</SubMenu> : ''}

							<Menu.Item key="about">
								<Icon type="mail" />About
      				  </Menu.Item>
							<Menu.Item key="contact">
								<Icon type="mail" />Contact
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
	};
}


export default connect(mapStateToProps, { menuCat, search })(Header);