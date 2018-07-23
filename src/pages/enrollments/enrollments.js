import React, { Component } from 'react';
import Course_enrollment from '../../components/course_enrollment/course_enrollment';
import './enrollments.css';
import { Tabs,Col,Row,Card } from 'antd';
import { connect } from 'react-redux';
import {
    userEnrollments
} from '../../actions'
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
  }
class enrollments extends Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.userEnrollments(1,40)
        console.log(this.props)
    }
    
    render() {
        const initialized = this.props.enrollments.enrollments.filter(e=>e.status===190)
        const invalid = this.props.enrollments.enrollments.filter(e=>e.status===196)
        const enrolled = this.props.enrollments.enrollments.filter(e=>e.status===192)
        return (
            <div className="enrollments-page" >
              <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Initialized" key="1">
    <ul className="thumbnails">
    {this.props.loading.userEnrollments===1?
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
        {initialized.length===0?<div> No courses found </div>:''}

                     {initialized.map(e=>{
            return <Course_enrollment key={e.id} id={e.course} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
        })}
                    </div>
    }
                </ul>
    </TabPane>
    <TabPane tab="Enrolled" key="2">
    <ul className="thumbnails">
    {this.props.loading.userEnrollments===1?
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
        {enrolled.length===0?<div> No courses found </div>:''}

                     {enrolled.map(e=>{
            return <Course_enrollment key={e.id} id={e.course} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
        })}
                    </div>
    }
                </ul>
    </TabPane>
    <TabPane tab="Invalid" key="3">
    <ul className="thumbnails">
    {this.props.loading.userEnrollments===1?
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
        {invalid.length===0?<div> No courses found </div>:''}
        {invalid.map(e=>{
            return <Course_enrollment key={e.id} id={e.course} round={e.round}  status={e.status} cart={e.id} course_details={e.course_details} />
        })}
                    
                   
                    </div>
    }
                </ul>
    </TabPane>
  </Tabs>
                  
                <div className="clearfix" ></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return { enrollments: state.enrollments, loading: state.loadingBar };
}

export default connect(mapStateToProps, {userEnrollments})(enrollments);