import React, { Component } from 'react';

class Student_review extends Component {
    render() {
        return (
            <div className="row blockquote review-item">
            <div className="col-md-3 col-sm-3 col-xs-3 text-center review-left">
                <img className="rounded-circle reviewer" src="/images/r.jpg" alt="" />
                <div className="caption">
                    <small>by
            <a href="#joe">Jones</a>
                    </small>
                </div>

            </div>
            <div className="col-md-9 col-sm-9 col-xs-9 review-right">
                <h4>Here goes your review title</h4>
                <ul className="ratebox">
                    <li>
                        <span className="fa fa-star" aria-hidden="true"></span>
                    </li>
                    <li>
                        <span className="fa fa-star" aria-hidden="true"></span>
                    </li>
                    <li>
                        <span className="fa fa-star" aria-hidden="true"></span>
                    </li>
                    <li>
                        <span className="fa fa-star" aria-hidden="true"></span>
                    </li>
                    <li>
                        <span className="fa fa-star-half-o" aria-hidden="true"></span>
                    </li>
                </ul>
                <p className="review-text">Fusce ultricies velit nibh, ut aliquet elit hendrerit ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut ullamcorper augue iaculis fermentum ultrices. Nullam nec faucibus odio. Donec at dui ut tellus pharetra congue
        a at tellus.</p>
                <small className="review-date">March 26, 2017</small>
            </div>
        </div>
        );
    }
}

export default Student_review;