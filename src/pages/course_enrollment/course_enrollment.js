import React, { Component } from 'react';
import './course_enrollment.css';
import {withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route, Link, Redirect, Switch  } from "react-router-dom";
import {connect} from 'react-redux';
import { courseDesc,courseDetails,courseModules } from '../../actions/index'
import weeks from '../weeks/weeks';
import { Steps,Popover } from 'antd';
import {Translate} from 'react-localize-redux'
const Step = Steps.Step;

const description = "ahmed"
const SideNav = withRR4();

class course_enrollment extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        this.props.courseDetails(this.props.match.params.id)
        this.props.courseModules(this.props.match.params.id)
        this.props.courseDesc(this.props.match.params.id)
    }
    renderSales = () => {
        const customDot = (dot, { status, index }) => (
            <Popover placement="bottom" content={<span>step {index} status: {status}</span>}>
              {dot}
            </Popover>
          );

          var week = this.props.language === 'ar' ? 'اسبوع ' : 'Week '
        return <div>

               <Steps  style={{overflow:'auto'}} progressDot={customDot} size="small" current={this.props.language==='ar'?this.props.weeks.length:1} >
               {this.props.weeks.map(e=>{
                   return <Step  key={e.id} title={week+e.week_number} status="wait" />
               })}

  </Steps>
        </div>;
    }
    renderSales1 = () => {
        return <div />;
    }

    render() {
        return (
            <div className="course-enrollment-page" >
            <Router>
            <div style={{display:'flex',flexDirection:this.props.language==='ar'?'row-reverse':'row'}}>
                <div className={this.props.language==='ar'?'arabic':'english'} style={{ background: 'whitesmoke', color: 'gray', width: 250, fontSize: '14px',direction:this.props.language === 'ar'?'rtl':'' }}>
                    <SideNav   highlightColor='#000' borderLeftColor='blue' highlightBgColor='#FFF' selected={'course_enrollment'}   >
                        <div className="side-header" >
                            <h4>{this.props.language==='ar'?this.props.course.name_a:this.props.course.name_e} </h4>
                            {/* <small> department </small> */}
                        </div>
                        <Nav id={`course_enrollment/${this.props.match.params.id}`} >
                            {/* <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon> */}
                            <NavText > <Translate id="home" /> </NavText>
                            {this.props.weeks.map(e=>{
                                return     <Nav key={e.id} id={`week/${e.id}`}  >
                                <NavText> {this.props.language==='ar'?e.text_a:e.text_e} </NavText>
                            </Nav>
                            })}
                        
                         
                        </Nav>
                        <Nav id={`course_enrollment/${this.props.match.params.id}/grades`}>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> <Translate id="grades" /> </NavText>
                        </Nav>
                        <Nav id={`course_enrollment/${this.props.match.params.id}/discussion`}>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> <Translate id="discussion_forums" /></NavText>
                        </Nav>
                        <Nav id={`course_enrollment/${this.props.match.params.id}/messages`}>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> <Translate id="messages" /> </NavText>
                        </Nav>
                        <Nav id={`course_enrollment/${this.props.match.params.id}/resources`}>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> <Translate id="resources" /> </NavText>
                        </Nav>
                        <Nav id={`course_enrollment/${this.props.match.params.id}/info`}>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> <Translate id="course.info" /> </NavText>
                        </Nav>
                    </SideNav>
            
                </div>
                <div style={{padding: 20,width:'80%'}}>
                         <Route exact path="/course_enrollment/:id" render={this.renderSales}/> 
                        <Route  path="/course_enrollment/:id/info" render={this.renderSales1}/>
                        <Route  path="/course_enrollment/:id/messages" render={this.renderSales}/>
                        <Route  path="/course_enrollment/:id/resources" render={this.renderSales1}/>
                        <Route  path="/course_enrollment/:id/discussion" render={this.renderSales}/>
                        <Route  path="/course_enrollment/:id/grades" component={weeks}  />
                        <Route  path="/course_enrollment/:id/week/:week" component={weeks}/>
                    </div>
            </div>    
                </Router>
                <div style={{ margin: '0 auto' }} >
             

                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return {course:state.course_details.course,weeks:state.course_details.modules,description:state.course_details.describtion,language:state.language.code}
}

export default connect(mapStateToProps,{courseDesc,courseDetails,courseModules}) (course_enrollment);