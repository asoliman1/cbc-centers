import React, { Component } from 'react';

class Reviews extends Component {
    render() {
        return (
            <div className="date-text">
                <img src="/images/tf1.jpg" alt=" " className="img-responsive" />
                <div className="clientf-info">
                    <span className="fa fa-quote-left" aria-hidden="true"></span>
                    <p>Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit.</p>
                    <h6>Elizabeth Harper</h6>
                </div>
                <div className="clearfix"> </div>
            </div>
        );
    }
}

export default Reviews;