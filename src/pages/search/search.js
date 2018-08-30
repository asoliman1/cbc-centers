import React, { Component } from 'react';
import './search.css';
import Search_item from '../../components/search_item/search_item';
import { connect } from 'react-redux';
import { Spin, Pagination, Modal, Button, Tree, Icon } from 'antd';
import { search as search1, getLanguages, searchByfilters } from '../../actions';

const TreeNode = Tree.TreeNode;


class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false, currentPage: 1, hideNav: false,
            checkedList_cat: [],
            checkedList_lang: [],
            checkedList_sub_cat: [],
            filters: false,
            currentSize: 20,
            search_type: '',
            category: '',
            subcategory: '',
            language: '',
            all: false,
            categories: false,
            keyword: false,
            expandedKeys: ['languages'],
            autoExpandParent: true,
            checkedKeys: [],
            selectedKeys: [],
        }
    }


    componentWillMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        this.set_search_type()
        this.props.getLanguages()
    }

    onExpand = (expandedKeys) => {
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }

    onCheck = (checkedKeys, info) => {
        let languages = [], categories = [], subcategories = []
        info.checkedNodes.forEach(e => {
            if (e.props.dataRef.lookup === "CRS_LNGG") {
                languages.push(e.key)
            } else if (e.props.dataRef.lookup === "CRS_SB_CTGRY") {
                subcategories.push(e.key)
            } else if (e.props.dataRef.lookup === "CRS_CTGRY") {
                categories.push(e.key)
            }
        });
        this.setState({ checkedKeys, checkedList_cat: categories, checkedList_lang: languages, checkedList_sub_cat: subcategories });
    }

    onSelect = (selectedKeys, info) => {
        this.setState({ selectedKeys });
    }

    renderTreeNodes = (data) => {
        return data.map((item) => {
            if (item.subcategories) {
                return (
                    <TreeNode title={this.props.language==='ar'?item.attr2:item.attr1} key={item.id} dataRef={item}>
                        {this.renderTreeNodes(item.subcategories)}
                    </TreeNode>
                );
            }
            return <TreeNode isLeaf title={this.props.language==='ar'?item.attr2:item.attr1} key={item.id} dataRef={item} />;
        });
    }



    componentDidUpdate(e1) {
        if (this.props.location.pathname !== e1.location.pathname) {
            this.set_search_type()
        }
    }


    set_search_type() {
        let sub = typeof this.props.match.params.sub !== 'undefined' ? this.props.match.params.sub : '';
        console.log(this.props.match.path)
        switch (this.props.match.path) {
            case "/courses/category/:cat/:sub?":
                this.setState({ category: this.props.match.params.cat, subcategory: sub, categories: true, all: false, keyword: false }, () => this.getsearch_results());
                break;
            case "/courses":
                this.setState({ categories: false, all: true, keyword: false }, () => this.getsearch_results())
                break;
            case "/search":
                this.setState({ categories: false, all: false, keyword: true }, () => this.getsearch_results())
                break;
        }
    }

    getsearch_results() {
        if (this.state.categories) {
            this.props.searchByfilters(this.state.category, this.state.subcategory, this.state.language, '', '', this.state.currentPage, this.state.currentSize)
        } else if (this.state.keyword) {
            this.props.searchByfilters(this.state.category, this.state.subcategory, this.state.language, '', this.props.location.search.replace('?', ''), this.state.currentPage, this.state.currentSize)
        } else if (this.state.all) {
            this.props.searchByfilters(this.state.category, this.state.subcategory, this.state.language, '', '', this.state.currentPage, this.state.currentSize)
        }
    }


    resize() {
        this.setState({ hideNav: window.innerWidth <= 900 });
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
        if (this.props.search.languages.length === 0)
            this.props.getLanguages();

        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            filters: true,
            confirmLoading: true,
            category: this.state.checkedList_cat.toString(),
            subcategory: this.state.checkedList_sub_cat.toString(),
            language: this.state.checkedList_lang.toString()
        }, () => this.getsearch_results());
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 1000);
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }


    onPage_size_change(page, size) {
        this.setState({ currentPage: page, currentSize: size }, () => this.getsearch_results());
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

                        <div className="filter-container" style={{direction:this.props.language==='ar'?'rtl':''}} >

                            <Tree
                                checkable
                                onExpand={this.onExpand}
                                expandedKeys={this.state.expandedKeys}
                                autoExpandParent={this.state.autoExpandParent}
                                onCheck={this.onCheck}
                                checkedKeys={this.state.checkedKeys}
                                onSelect={this.onSelect}
                                selectedKeys={this.state.selectedKeys}
                                prefixCls={this.props.language==='ar'?"arabic ant-tree":"ant-tree"}

                            >
                                {this.renderTreeNodes([{ attr1: 'Categories',attr2:'الاقسام', id: 'categories', subcategories: this.props.categories }, { attr1: 'Languages', id: 'languages',attr2:'اللغات', subcategories: this.props.search.languages }])}
                            </Tree>
                        </div>

                    </div>
                </Modal>

                {this.state.hideNav ?
                    <div className="row" style={{ position:'sticky',top:100,zIndex:1 }} >

                            <Button type="primary" style={{ float:this.props.language==='ar'?'left':'right' }} onClick={this.showModal} icon="filter">Filters</Button>
                    </div>
                    : ''}
                <div className="row text-center" >
                    {this.props.search.counts === 0 && ( this.props.loading.searchbyfilters === 0) ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px',textAlign:'center' }}> No items found </div> :
                        ''
                    }
                    {this.props.loading.search === 1 || this.props.loading.searchbyfilters === 1 ? <Spin size="large" /> :
                        ''
                    }
                </div>
                <div className="row" style={{display:'flex',flexDirection:this.props.language==='ar'?'row-reverse':''}} >
                    {!this.state.hideNav ?
                        <div style={{ marginTop: 45 }} className="col-lg-3 col-md-3 col-sm-auto" >
                            <div style={{position:'sticky',top:110}} >
                                <div className="search-filters" style={{direction:this.props.language==='ar'?'rtl':''}}>
                                    <div className="filter-container" >

                                        <Tree
                                            checkable
                                            onExpand={this.onExpand}
                                            expandedKeys={this.state.expandedKeys}
                                            autoExpandParent={this.state.autoExpandParent}
                                            onCheck={this.onCheck}
                                            checkedKeys={this.state.checkedKeys}
                                            onSelect={this.onSelect}
                                            selectedKeys={this.state.selectedKeys}
                                            prefixCls={this.props.language==='ar'?"arabic ant-tree":"ant-tree"}
                                        >
                                            {this.renderTreeNodes([{ attr1: 'Categories',attr2:'الاقسام', id: 'categories', subcategories: this.props.categories }, { attr1: 'Languages',attr2:'اللغات' ,id: 'languages', subcategories: this.props.search.languages }])}
                                        </Tree>
                                    </div>
                                    <div style={{ textAlign: 'center' }} >
                                    {this.props.loading.searchbyfilters === 0? 
                                        <Button onClick={()=>this.handleOk()} >{this.props.language==='ar'?'بحث':'Apply Filters'}  <Icon type="search" /> </Button>
                                    : <Icon style={{color:'#1890ff'}} type="loading" spin /> }
                                    </div>
                                </div>
                            </div>
                        </div> : ''}
                    {this.props.loading.search === 0 || this.props.loading.searchbyfilters === 0 ?

                        <div className="col-lg-8 col-md-9 col-sm-auto col-xs-15"  >
                            <div style={{ marginBottom: 20 }} className="row text-center" >

                                <Pagination style={{direction:this.props.language==='ar'?'rtl':''}} size="small"  current={this.state.currentPage} pageSize={this.state.currentSize} total={this.props.search.counts} showTotal={(total, range) => `${range[0]}-${range[1]} ${this.props.language==='ar'?'من':'of'} ${total}`} onChange={(size, page) => this.onPage_size_change(size, page)} onShowSizeChange={(size, page) => this.onPage_size_change(size, page)} showSizeChanger showQuickJumper />
                            </div>
                            <ul style={{direction:this.props.language==='ar'?'rtl':'ltr'}} className="list-group">
                                {this.props.search.results.map(e => {
                                    return <Search_item lang={this.props.language} key={e.id} name_e={e.name_e} name_a={e.name_a} image={e.image} desc={e.short_desc_e} price={e.price} raters={e.total_raters} rate={e.total_rating} category={e.categories.length > 0 ? e.categories[0] : ''} creation_date={e.creation_date} id={e.id} />
                                })}

                            </ul>
                            <div className="row text-center" >

                                <Pagination size="small" style={{direction:this.props.language==='ar'?'rtl':''}}  current={this.state.currentPage} pageSize={this.state.currentSize} total={this.props.search.counts} showTotal={(total, range) => `${range[0]}-${range[1]} ${this.props.language==='ar'?'من':'of'} ${total}`} onChange={(size, page) => this.onPage_size_change(size, page)} onShowSizeChange={(size, page) => this.onPage_size_change(size, page)} showSizeChanger showQuickJumper />
                            </div>
                        </div> : ''}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { search: state.search, loading: state.loadingBar, categories: state.header.categories, language: state.language.code };
}



export default connect(mapStateToProps, { search1, getLanguages, searchByfilters })(search);