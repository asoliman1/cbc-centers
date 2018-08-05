import React, { Component } from 'react';
import './wish.css';
import { connect } from 'react-redux';
import {
    wishList
} from '../../actions'
import { Card, Col, Row } from 'antd';

import Wish_item from '../../components/wish_item/wish_item';
class wish extends Component {
    constructor(props) {
        super(props);
        this.props.wishList('1', '100')
    }

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="page-wishlist" style={{direction:this.props.language==='ar'?'rtl':''}} >
                {this.props.loading.wishList === 0 && this.props.wishlist.content.length === 0 ? <div style={{ textAlign: 'center', fontSize: '15px' }} > No items found </div> : ''}
                <ul>
                    {this.props.loading.wishList === 1 ?
                        <div style={{ padding: '24px' }} >
                            <Col style={{ marginBottom: '20px' }} >
                                <Card loading={true} bordered={true}>Card content</Card>
                            </Col>
                            <Col style={{ marginBottom: '20px' }}>
                                <Card loading={true} bordered={true}>Card content</Card>
                            </Col>
                            <Col style={{ marginBottom: '20px' }}>
                                <Card loading={true} bordered={true}>Card content</Card>
                            </Col>
                            <Col style={{ marginBottom: '20px' }}>
                                <Card loading={true} bordered={true}>Card content</Card>
                            </Col>
                        </div>
                        :
                        this.props.wishlist.content.map(e => {
                            return <Wish_item key={e.id} lang={this.props.language} id={e.id} course={e.course} x={e.course_details} />
                        })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { wishlist: state.wishlist, loading: state.loadingBar,language:state.language.code };
}


export default connect(mapStateToProps, { wishList })(wish);