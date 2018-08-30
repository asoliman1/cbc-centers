import React, { Component } from 'react';
import './course_faqs.css';
class Course_faqs extends Component {
    constructor(props){
        super(props);
        this.state={a:'none'}
    }
    render() {
        return (
            <li  className="item1">
            <a  title="click here" >Lorem ipsum dolor sit tempor vehicula ipsum nec?</a>
            <ul className="animated fadeInUp" >
                <li className="subitem1">
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                </li>
            </ul>
        </li>
        );
    }
}

export default Course_faqs;