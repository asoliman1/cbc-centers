import React, { Component } from 'react';
import './search.css';
import Search_item from '../../components/search_item/search_item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin, Pagination, Modal, Affix, Button, Icon, Row, Col } from 'antd';
import { search as search1, getLanguages, searchByfilters } from '../../actions';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;



function callback(key) {
    console.log(key);
}

class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false, currentPage: 1, hideNav: false,
            checkedList_cat: [],
            checkedList_lang: [],
            indeterminate_cat: false,
            indeterminate_lang: false,
            checkAll_cat: false,
            checkAll_lang: false,
            filters: false,
            currentSize: 20
        }
    }


    componentWillMount() {
        window.scroll(0, 0);
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        if (typeof this.props.location.state !== 'undefined') {
            if (this.props.location.state.all)
                this.props.searchByfilters('', '', '', '', '', 1, 20)
            else {
                this.props.searchByfilters(this.props.location.state.categories, this.props.location.state.sub_categories, '', this.props.location.state.type, '', '1', '20')
            }
        } else {
            this.props.search1(this.props.location.search.replace('?', ''), 1, 20)
        }

    }


    componentDidMount() {
        if (this.props.search.languages.length === 0)
            this.props.getLanguages();
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
        return `Total ${this.props.search.results.length} items`;
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            filters: true,
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);

        this.props.searchByfilters(this.state.checkedList_cat.toString(), '', this.state.checkedList_lang.toString(), this.props.location.state ? this.props.location.state.type : '', this.props.location.search.replace('?', ''), '1', '20')
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    onChange_cat = (checkedList) => {
        this.setState({
            checkedList_cat: checkedList,
            indeterminate_cat: !!checkedList.length && (checkedList.length < this.props.categories.length),
            checkAll_cat: checkedList.length === this.props.categories.length,
        });
    }

    onChange_lang = (checkedList) => {
        this.setState({
            checkedList_lang: checkedList,
            indeterminate_lang: !!checkedList.length && (checkedList.length < this.props.search.languages.length),
            checkAll_lang: checkedList.length === this.props.search.languages.length,
        });
    }

    onCheckAllChange = (e) => {
        if (e.target.name === 'checkAll_cat') {
            this.setState({
                checkedList_cat: e.target.checked ? this.props.categories.map(e => { return e.id }) : [],
                indeterminate_cat: false,
                checkAll_cat: e.target.checked,
            });
        } else {
            this.setState({
                checkedList_lang: e.target.checked ? this.props.search.languages.map(e => { return e.id }) : [],
                indeterminate_lang: false,
                checkAll_lang: e.target.checked,
            });
        }
    }

    onPage_size_change(page, size) {
        this.setState({ currentPage: page, currentSize: size });
        if (typeof this.props.location.state !== 'undefined') {
            if (this.props.location.state.all){ 
                if (this.state.filters)
                    this.props.searchByfilters(this.state.checkedList_cat, '', this.state.checkedList_lang, '', '', page, size)
                else
                this.props.searchByfilters('', '', '', '', '', page, size)

                }     else {
                    this.props.searchByfilters(this.props.location.state.categories, this.props.location.state.sub_categories, '', this.props.location.state.type, '', page, size)
                }
        } else {
            if (this.state.filters) {
                this.props.searchByfilters(this.props.state.checkedList_cat, '', this.state.checkedList_lang, '', this.props.location.search.replace('?', ''), page, size)
            } else
                this.props.search1(this.props.location.search.replace('?', ''), page, size)
        }
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div className="search-page" >
                <Modal
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    style={{ top: 20 }}
                    okText="Apply Filters"

                >
                    <div className="modal-filters" >
                        <div className="filter-container">
                            <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                <Checkbox
                                    indeterminate={this.state.indeterminate_lang}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll_lang}
                                    name="checkAll_lang"
                                >
                                    Languages
          </Checkbox>
                            </div>
                            <br />
                            <Checkbox.Group style={{ width: '100%' }} value={this.state.checkedList_lang} onChange={this.onChange_lang}>
                                <Row>
                                    {this.props.search.languages.map(e => {
                                        return <Col key={e.id} ><Checkbox value={e.id}  >{e.attr1}</Checkbox></Col>
                                    })}

                                </Row>
                            </Checkbox.Group>
                        </div>
                        <div className="filter-container" >
                            <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                <Checkbox
                                    indeterminate={this.state.indeterminate_cat}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll_cat}
                                    name="checkAll_cat"
                                >
                                    Categories
          </Checkbox>
                            </div>
                            <br />
                            <Checkbox.Group style={{ width: '100%' }} value={this.state.checkedList_cat} onChange={this.onChange_cat}>
                                <Row>
                                    {this.props.categories.map(e => {
                                        return <Col key={e.id} ><Checkbox value={e.id} >{e.attr1}</Checkbox></Col>
                                    })}

                                </Row>
                            </Checkbox.Group>
                        </div>

                    </div>
                </Modal>

                <div className="row">
                    <Affix style={{ marginBottom: '15px' }} offsetTop={this.state.hideNav ? 120 : 155} offsetBottom={100} >

                        <Button type="primary" style={{ float: 'right' }} onClick={this.showModal} icon="filter">Filters</Button>
                    </Affix>
                </div>
                <div className="row text-center" >
                    {this.props.search.counts > 0 ?
                        <Pagination size="small" current={this.state.currentPage} pageSize={this.state.currentSize} total={this.props.search.counts} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} onChange={(size, page) => this.onPage_size_change(size, page)} onShowSizeChange={(size, page) => this.onPage_size_change(size, page)} showSizeChanger showQuickJumper />
                        : this.props.loading.search === 1 || this.props.loading.searchbyfilters === 1 ? <Spin size="large" /> : <div> No items found </div>}
                </div>

                <div className="row" >
                    <div className="col-md-"  >
                        <ul className="list-group">
                            {this.props.search.results.map(e => {
                                return <Search_item key={e.id} name={e.name_e} image={e.image} desc={e.short_desc_e} price={e.price} raters={e.total_raters} rate={e.total_rating} category={e.categories.length > 0 ? e.categories[0] : ''} creation_date={e.creation_date} id={e.id} />
                            })}

                        </ul>
                    </div>
                </div>
                <div className="row text-center" >
                    {this.props.search.counts > 0 ?
                        <Pagination size="small" current={this.state.currentPage} pageSize={this.state.currentSize} total={this.props.search.counts} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} onChange={(size, page) => this.onPage_size_change(size, page)} onShowSizeChange={(size, page) => this.onPage_size_change(size, page)} showSizeChanger showQuickJumper />
                        : <div> </div>}                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { search: state.search, loading: state.loadingBar, categories: state.header.categories };
}



export default connect(mapStateToProps, { search1, getLanguages, searchByfilters })(search);