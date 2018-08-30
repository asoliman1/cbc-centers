import React, { Component } from 'react';
import './course_instructor.css';
import {Rate} from 'antd';

class Course_instructor extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-md-3 col-sm-2 col-xs-1 col-lg-3 col-xl-4 mteam_grid_info" style={{float:this.props.lang==='ar'?'right':''}} >
            <img src={this.props.details.instructor_details.image?'http://167.99.244.62:8000'+this.props.details.instructor_details.image:'/images/error.jpg'} onError={(e) => { e.target.src = '/images/error.jpg' }} className="img-responsive" />
            <h3 style={{lineHeight:'25px',height:'51px',overflow:'hidden'}} >{this.props.lang==='ar'?this.props.details.title_a+"/ "+this.props.details.instructor_details.name_a:this.props.details.title_e+"/ "+this.props.details.instructor_details.name_e}</h3>
            <p style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipse',height:22}} >{this.props.lang==='ar'?this.props.details.text_a:this.props.details.text_e}</p>

            <Rate style={{fontSize:'100%',marginBottom:10}} value={this.props.total_rating} disabled={true} />
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