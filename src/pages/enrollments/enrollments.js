import React, { Component } from 'react';
import Course_enrollment from '../../components/course_enrollment/course_enrollment';
import './enrollments.css';

class enrollments extends Component {
    render() {
        return (
            <div className="enrollments-page" >
                   <ul className="thumbnails">
                    <Course_enrollment />
                    <Course_enrollment />
                    <Course_enrollment />
                    <Course_enrollment />
                    <Course_enrollment />
                    <Course_enrollment />
                    <Course_enrollment />
                </ul>
                <div className="clearfix" ></div>
            </div>
        );
    }
}

export default enrollments;