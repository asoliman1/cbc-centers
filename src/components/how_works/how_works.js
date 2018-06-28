import React, { Component } from 'react';
import './how_works.css';
class How_works extends Component {
    render() {
        return (
            <div className="ser-grid-middle">
            <div className="mser-top">
                <div className="col-xs-2 micon-works">
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                </div>
                <div className="col-xs-8 micon-works-text">
                    <h4>Help from Your Peers</h4>
                    <p>Connect with thousands of other learners and ideas, discuss course material, and get help mastering concepts for
                        anytime.
        </p>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        );
    }
}

export default How_works;