import React, { Component } from 'react';

class Course_card extends Component {
    render() {
        return (
            <li className={this.props.cls==="demo-car"?"demo-car":"col-sm-6 demo-sidecourse"}>
            <div className="fff">
                <div className="thumbnail">
                    <a href="#">
                        <img src="/images/mf2.jpg" alt="" />
                    </a>
                </div>
                <div className="caption">
                    <h4>Description</h4>
                    <p>Niel Fontine</p>
                </div>
            </div>
        </li>
        );
    }
}

export default Course_card;