import React, { Component } from 'react';
import Course_enrollment from '../../components/course_enrollment/course_enrollment';
import './enrollments.css';
import { Tabs,Col,Row,Card } from 'antd';
import { connect } from 'react-redux';
import { Translate } from 'react-localize-redux';
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
        var unpaid = this.props.enrollments.enrollments.filter(e=>e.status===190)
        var invalid = this.props.enrollments.enrollments.filter(e=>e.status===196)
        var under_validation = this.props.enrollments.enrollments.filter(e=>e.status===192)
        var paid = this.props.enrollments.enrollments.filter(e=>e.status===193)

        return (
            <div className="enrollments-page"  >
              <Tabs  defaultActiveKey={this.props.language==='ar'?'4':'1'} onChange={callback} tabBarStyle={{display:'flex',flexDirection:this.props.language==='ar'?'row-reverse':''}} >
    <TabPane style={{direction:this.props.language==='ar'?'rtl':''}} tab={<Translate id="unpaid" />} key="1">
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
        {unpaid.length===0?<div><Translate id="course.notfound" /> </div>:''}

                     {this.props.enrollments.enrollments.filter(e=>e.status===190).map(e=>{
            return <Course_enrollment key={e.id} payment={true} lang={this.props.language} id={e.course} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
        })}
                    </div>
    }
                </ul>
    </TabPane>
    <TabPane style={{direction:this.props.language==='ar'?'rtl':''}} tab={<Translate id="under_validation" />} key="2">
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
        {under_validation.length===0?<div> <Translate id="course.notfound" /></div>:''}

                     {under_validation.map(e=>{
            return <Course_enrollment key={e.id} payment={false} lang={this.props.language} id={e.course} round={e.round} status={e.status} cart={e.id} course_details={e.course_details} />
        })}
                    </div>
    }
                </ul>
    </TabPane>
    <TabPane style={{direction:this.props.language==='ar'?'rtl':''}} tab={<Translate id="invalid"/>} key="3">
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
        {invalid.length===0?<div> <Translate id="course.notfound" /> </div>:''}
        {invalid.map(e=>{
            return <Course_enrollment key={e.id} payment={true} id={e.course} lang={this.props.language} round={e.round}  status={e.status} cart={e.id} course_details={e.course_details} />
        })}
                    
                   
                    </div>
    }
                </ul>
    </TabPane>

     <TabPane style={{direction:this.props.language==='ar'?'rtl':''}} tab={<Translate id="paid"/>} key="4">
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
        {paid.length===0?<div> <Translate id="course.notfound" /> </div>:''}
        {paid.map(e=>{
            return <Course_enrollment key={e.id} payment={false} id={e.course} lang={this.props.language} round={e.round}  status={e.status} cart={e.id} course_details={e.course_details} />
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
    return { enrollments: state.enrollments, loading: state.loadingBar,language:state.language.code };
}

export default connect(mapStateToProps, {userEnrollments})(enrollments);