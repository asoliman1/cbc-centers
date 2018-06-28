import React, { Component } from 'react';
import './search.css';
import Search_item from '../../components/search_item/search_item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin, Pagination, Menu, Modal,Radio ,Affix, Button, Icon} from 'antd';
import { search as search1 } from '../../actions';



function callback(key) {
    console.log(key);
}

class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false, currentPage: 1, hideNav: false
        }
    }


    componentWillMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

        if (this.props.location.search === '') {
            if (this.props.history.location.pathname === '/search') {
                this.props.history.go('/home');
            } else {
                this.this.props.history.goBack()
            }
        } else {
            this.props.search1(this.props.location.search.replace('?', ''), 0, 20)
        }
    }

    resize() {
        this.setState({ hideNav: window.innerWidth <= 600 });
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    showTotal(total) {
        return `Total ${total} items`;
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }

    handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      }

    render() {
        window.scroll(0, 0);
        const { visible, confirmLoading, ModalText } = this.state;

        return (
            <div className="search-page" >
             <Modal title="Filters"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          style={{ top: 160 }}
          okText="Apply Filters"
        >

            <ul>
                <div className="ccontainer">
                    <div className="cheader" >Language</div>
                    <div className="ccontent" >
                        <ul>
                            <li><Radio>عربي</Radio> </li>
                            <li><Radio>انجليزي</Radio> </li>
                        </ul>
                    </div>
                </div>

                <div className="ccontainer" >
                    <div className="cheader" >Category</div>
                    <div className="ccontent" id="category" >
                        <ul>
                            <li><Radio> الفنون و العلوم الانسانيه </Radio> </li>
                            <li><Radio>اعمال</Radio>  </li>
                            <li><Radio>علوم الكمبيوتر</Radio> </li>
                            <li><Radio>علوم البيانات</Radio> </li>
                            <li><Radio>تقنيه المعلومات</Radio> </li>
                            <li><Radio>علوم الحياه</Radio> </li>
                        </ul>
                    </div>
                </div>

                <div className="ccontainer" >
                    <div className="cheader" >Gender</div>
                    <div className="ccontent" >
                        <ul>
                            <li><Radio>ذكر</Radio> </li>
                            <li><Radio>انثي</Radio> </li>
                            <li><Radio>غير محدد</Radio> </li>
                        </ul>
                    </div>
                </div>

                <div className="ccontainer" >
                    <div className="cheader" >Location</div>
                    <div className="ccontent" >
                        <ul>
                            <li><Radio>اونلاين</Radio> </li>
                            <li><Radio>بالحضور</Radio> </li>
                        </ul>
                    </div>
                </div>

            </ul>
        </Modal>
                {/* <Sider
          trigger={'dsfsdf'}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth={0}
          onClick={()=>this.toggle()}
          breakpoint={'xs'}
        >
          <div className="logo" />
          <Menu theme="" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider> */}
                <div className="row">
                    <Affix style={{ marginBottom: '15px' }} offsetTop={this.state.hideNav ? 100 : 155} offsetBottom={100} >

                        <Button style={{ float: 'right' }} onClick={this.showModal} icon="filter">Filters</Button>
                    </Affix>
                </div>
                <div className="row text-center" >
                    {this.props.search.content.length > 0 ?
                        <Pagination current={this.state.currentPage} defaultPageSize={20} size="small" style={{ marginBottom: '10px' }} total={this.props.search.totalElements} showTotal={() => { this.showTotal() }} onShowSizeChange={() => { this }} showSizeChanger showQuickJumper />
                        : this.props.loading.default > 0 ? <Spin size="large" /> : <div> No items found </div>}
                </div>

                <div className="row" >
                    <div className="col-md-"  >
                        <ul className="list-group">
                            {this.props.search.content.map(e => {
                                return <Search_item key={e.id} name={e.nameE} image={e.image} desc={e.shortDescE} price={e.price} rate={e.totalRating / e.totalRaters} instructor={e.creator.firstName + ' ' + e.creator.lastName} id={e.id} />
                            })}

                        </ul>
                    </div>
                </div>
                <div className="row text-center" >
                    {this.props.search.content.length > 0 ?
                        <Pagination size="small" current={this.state.currentPage} defaultPageSize={20} total={this.props.search.totalElements} showTotal={() => { this.showTotal() }} showSizeChanger showQuickJumper />
                        : <div> </div>}                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state)
    return { search: state.search, loading: state.loadingBar };
}



export default connect(mapStateToProps, { search1 })(search);