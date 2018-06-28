import React, { Component } from 'react';
import './course_enrollment.css';
import {withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route, Link, Redirect, Switch  } from "react-router-dom";
import Course_instructor from '../../components/course_instructor/course_instructor';
import Course_card from '../../components/course_card/course_card';

const description = "ahmed"
const SideNav = withRR4();

class course_enrollment extends Component {
    constructor(props) {
        super(props);

    }
    renderSales = () => {
        return <Course_card />;
    }
    renderSales1 = () => {
        return <Course_instructor/>;
    }

    render() {
        return (
            <div className="course-enrollment-page" >
            <Router>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{ background: 'whitesmoke', color: 'gray', width: 250, fontSize: '14px' }}>
                    <SideNav highlightColor='#000' borderLeftColor='blue' highlightBgColor='#FFF' selected={'course_enrollment'}   >
                        <div className="side-header" >
                            <h4>Name of the course </h4>
                            <small> department </small>
                        </div>
                        <Nav id='course_enrollment' >
                            {/* <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio} /></NavIcon> */}
                            <NavText> Course Home </NavText>
                            <Nav id='week/1'  >
                                <NavText> Week 1 </NavText>
                            </Nav>
                            <Nav id='week/2'>
                                <NavText> Week 2 </NavText>
                            </Nav>
                            <Nav id='week/3'>
                                <NavText> Week 3 </NavText>
                            </Nav>
                            <Nav id='week/4'>
                                <NavText> Week 4 </NavText>
                            </Nav>
                            <Nav id='week/5'>
                                <NavText> Week 5 </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='course_enrollment/grades'>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> Grades </NavText>
                        </Nav>
                        <Nav id='course_enrollment/discussion'>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> Discussion Forums </NavText>
                        </Nav>
                        <Nav id='course_enrollment/messages'>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> Messages </NavText>
                        </Nav>
                        <Nav id='course_enrollment/resources'>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> Resources </NavText>
                        </Nav>
                        <Nav id='course_enrollment/info'>
                            {/* <NavIcon><SvgIcon size={20} icon={ic_business} /></NavIcon> */}
                            <NavText> Course Info </NavText>
                        </Nav>
                    </SideNav>
            
                </div>
                <div style={{padding: 20}}>
                         <Route exact path="/course_enrollment/" render={this.renderSales}/> 
                        <Route  path="/course_enrollment/info" render={this.renderSales1}/>
                        <Route  path="/course_enrollment/messages" render={this.renderSales}/>
                        <Route  path="/course_enrollment/resources" render={this.renderSales1}/>
                        <Route  path="/course_enrollment/discussion" render={this.renderSales}/>
                        <Route  path="/course_enrollment/grades" render={this.renderSales1}/>
                        <Route  path="/course_enrollment/week/:id" render={this.renderSales1}/>
                        
                         
                    </div>
            </div>    
                </Router>
                <div style={{ margin: '0 auto' }} >
             

                    {/* <div className='course-enrollment-content'>
                        <Steps labelPlacement="vertical" current={1}>
                            <Step title="Step 1" status='finish'  />
                            <Step title="Step 2" status='process' />
                            <Step title="Step 3" />
                            <Step title="Step 4" />
                            <Step title="Step 5" />
                        </Steps>
                    </div>
                    <div>dsadas</div> */}
                </div>
            </div>
        );
    }
}

export default course_enrollment;