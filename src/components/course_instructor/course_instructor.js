import React, { Component } from 'react';
import './course_instructor.css';
import {Rate} from 'antd';
class Course_instructor extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="col mteam_grid_info">
            <img src={this.props.details.image?this.props.details.image:'/images/error.jpg'} onError={(e) => { e.target.src = '/images/error.jpg' }} className="img-responsive" />
            <h3>{this.props.details.name_e}</h3>
            <p style={{wordBreak:'break-all'}} >{this.props.details.short_desc_e}</p>

            <Rate value={this.props.details.total_rating} disabled={true} />
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