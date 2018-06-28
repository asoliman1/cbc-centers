import React, { Component } from 'react';

class Related_course extends Component {
    render() {
        return (
            <div className="demo-desc">
            <div className="col-md-4 col-sm-4 col-xs-4 demo-desc-left">
                <a href="course-2.html">
                    <img src="/images/mf5.jpg" className="img-responsive" alt=""/>
                </a>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-8 demo-desc-right">
                <div className="demo-desc-text">
                    <a href="course-2.html">
                        <h4>course title</h4>
                    </a>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s..</p>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
        );
    }
}

export default Related_course;