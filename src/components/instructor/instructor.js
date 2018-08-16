import React, { Component } from 'react';
import './instructor.css';
class Instructor extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    
    render() {
        return (
                <div className="col-xs-4 fteam_grid_info">
                    <img src={'http://167.99.244.62:8000'+this.props.details.instructor_details.image} alt=" " className="img-responsive" />
                    <h3> {this.props.details.title_e } </h3>
                    <p>{this.props.details.instructor_details.name_e}</p>
                    <div className="teamf_icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default Instructor;