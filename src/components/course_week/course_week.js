import React, { Component } from 'react';

class Course_week extends Component {
    render() {
        return (
            <div id={this.props.collapse} className={this.props.active?"panel-collapse collapse in":"panel-collapse collapse"} role="tabpanel" aria-labelledby={this.props.heading}>
            <div className="panel-body panel_text">
                <h3>Introduction to Courses</h3>
                <p>Learn about Courses consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h6>Excellent Topics:</h6>
                <ul>
                    <li>Core IT Skills</li>
                    <li>Data Science</li>
                    <li>Databases</li>
                    <li>Hardware</li>
                    <li>Network And Security</li>
                </ul>
                <h6>What You'll Learn:</h6>
                <ul>
                    <li>How to manage social media issues based on a real-life examples</li>
                    <li>The positives of building a strong participatory culture</li>
                    <li>Manage an organisation’s online reputation</li>
                    <li>Apply reputational management principles to manage online issues and crises</li>
                </ul>
                <a href="#small-dialog1" className="play-icon popup-with-zoom-anim mbutton-course2">
                    <i className="fa fa-video-camera" aria-hidden="true"></i> Watch Video</a>
                <div id="small-dialog1" className="mfp-hide textmks_small_dialog mmstyle_pop">
                    <div className="mainsmkits_modal_body">
                        <iframe src="https://player.vimeo.com/video/180873616"></iframe>
                    </div>
                </div>
            </div>
        </div>        );
    }
}

export default Course_week;