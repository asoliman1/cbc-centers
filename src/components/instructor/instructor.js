import React, { Component } from 'react';
import './instructor.css';
class Instructor extends Component {
    render() {
        return (
                <div className="col-xs-4 fteam_grid_info">
                    <img src="/images/tf1.jpg" alt=" " className="img-responsive" />
                    <h3>Maria Lisa</h3>
                    <p>Professor of Marketing</p>
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