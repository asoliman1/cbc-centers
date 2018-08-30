import React, { Component } from 'react';
import './how_works.css';
class How_works extends Component {
    render() {
        return (
            <div className="ser-grid-middle">
            <div className="mser-top">
                <div className="col-xs-3 col-lg-2 col-md-2 col-sm-2 micon-works" style={{float:this.props.lang==='ar'?'right':''}} >
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                </div>
                <div className="col-sm-8 col-xs-9 col-md-10 micon-works-text" style={{float:this.props.lang==='ar'?'right':''}}  >
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