import React, { Component } from 'react';
import './course_instructor.css';
class Course_instructor extends Component {
    render() {
        return (
            <div className="col-md-4 mteam_grid_info">
            <img src="/images/t2.jpg" alt=" " className="img-responsive" />
            <h3>Pippa Molly</h3>
            <p>Corporate Marketing</p>
            <div className="team_icons">
                <ul>
                    <li>
                        <a href="#" className="mm_mainsmk_facebook">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mainsmk_twitter">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mm_mainsmk_dribble">
                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Course_instructor;