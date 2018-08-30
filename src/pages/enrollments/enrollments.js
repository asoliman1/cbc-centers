import React, { Component } from 'react';
import Course_enrollment from '../../components/course_enrollment/course_enrollment';
import './enrollments.css';
import { Tabs, Col, Row, Card, Pagination } from 'antd';
import { connect } from 'react-redux';
import { Translate } from 'react-localize-redux';
import {
    userEnrollments
} from '../../actions'
const TabPane = Tabs.TabPane;

class enrollments extends Component {

    constructor(props) {
        super(props);
        this.state = { current_tab: '190', page: 1, page_size: '10' }
    }

    componentDidMount() {
        this.props.userEnrollments('190', '1', '10')
    }

    callback(key) {
        switch (key) {
            case "1":
                key = 190;
                break;
            case "2":
                key = 192
                break;
            case "3":
                key = 196
                break
            case "4":
                key = 193
                break
            case "5":
                key = 191
                break
        }
        this.setState({ current_tab: key });
        this.props.userEnrollments(key, this.state.page, this.state.page_size)
    }
    showTotal(total) {
        return `Total ${total} items`;
    }

    render() {

        return (
            <div className="enrollments-page"  >
                <Tabs style={{ paddingBottom: 40 }} defaultActiveKey={this.props.language === 'ar' ? '4' : '1'} onChange={(e) => this.callback(e)} tabBarStyle={{ display: 'flex', flexDirection: this.props.language === 'ar' ? 'row-reverse' : '' }} >

                    <TabPane style={{ direction: this.props.language === 'ar' ? 'rtl' : '' }} tab={<Translate id="unpaid" />} key="1">
                        <ul className="thumbnails">
                            {this.props.loading.userEnrollments === 1 ?
                                <Row style={{ padding: '16px' }} gutter={16}>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                </Row>
                                : <div>
                                    {this.props.enrollments.enrollments.length === 0 ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px', textAlign: 'center' }} ><Translate id="course.notfound" /> </div> : ''}

                                    {this.props.enrollments.enrollments.map(e => {
                                        return <Course_enrollment key={e.id} payment={true} lang={this.props.language} id={e.course} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
                                    })}
                                </div>
                            }
                        </ul>
                    </TabPane>
                    <TabPane style={{ direction: this.props.language === 'ar' ? 'rtl' : '' }} tab={<Translate id="under_validation" />} key="2">
                        <ul className="thumbnails">
                            {this.props.loading.userEnrollments === 1 ?
                                <Row style={{ padding: '16px' }} gutter={16}>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                </Row>
                                : <div>
                                    {this.props.enrollments.enrollments.length === 0 ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px', textAlign: 'center' }} > <Translate id="course.notfound" /></div> : ''}

                                    {this.props.enrollments.enrollments.map(e => {
                                        return <Course_enrollment key={e.id} payment={false} lang={this.props.language} id={e.course} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
                                    })}
                                </div>
                            }
                        </ul>
                    </TabPane>
                    <TabPane style={{ direction: this.props.language === 'ar' ? 'rtl' : '' }} tab={<Translate id="invalid" />} key="3">
                        <ul className="thumbnails">
                            {this.props.loading.userEnrollments === 1 ?
                                <Row style={{ padding: '16px' }} gutter={16}>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                </Row>
                                : <div>
                                    {this.props.enrollments.enrollments.length === 0 ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px', textAlign: 'center' }} > <Translate id="course.notfound" /> </div> : ''}
                                    {this.props.enrollments.enrollments.map(e => {
                                        return <Course_enrollment key={e.id} payment={true} id={e.course} lang={this.props.language} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
                                    })}


                                </div>
                            }
                        </ul>
                    </TabPane>

                    <TabPane style={{ direction: this.props.language === 'ar' ? 'rtl' : '' }} tab={<Translate id="paid" />} key="4">
                        <ul className="thumbnails">
                            {this.props.loading.userEnrollments === 1 ?
                                <Row style={{ padding: '16px' }} gutter={16}>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card loading={true} bordered={false}>Card content</Card>
                                    </Col>
                                </Row>
                                : <div>
                                    {this.props.enrollments.enrollments.length === 0 ? <div style={{ fontSize: '20px', fontVariant: 'petite-caps', padding: '16px', textAlign: 'center' }} > <Translate id="course.notfound" /> </div> : ''}
                                    {this.props.enrollments.enrollments.map(e => {
                                        return <Course_enrollment key={e.id} payment={false} id={e.course} lang={this.props.language} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
                                    })}


                                </div>
                            }
                        </ul>

                    </TabPane>

                </Tabs>
                <div style={{ textAlign: 'center' }} >
                    <Pagination size="small" style={{ direction: this.props.language === 'ar' ? 'rtl' : '' }} current={this.state.page} pageSize={this.state.page_size} showTotal={(total, range) => `${range[0]}-${range[1]} ${this.props.language === 'ar' ? 'من' : 'of'} ${total}`} total={this.props.enrollments.counts} onShowSizeChange={(page, size) => { this.setState({ page: page, page_size: size }); this.props.userEnrollments(this.state.current_tab, page, size) }} onChange={(page, size) => { this.setState({ page: page, page_size: size }); this.props.userEnrollments(this.state.current_tab, page, size) }} showSizeChanger showQuickJumper />
                </div>
                <div className="clearfix" ></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { enrollments: state.enrollments, loading: state.loadingBar, language: state.language.code };
}

export default connect(mapStateToProps, { userEnrollments })(enrollments);