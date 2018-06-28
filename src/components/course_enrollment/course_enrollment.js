import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Course_enrollment extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            // 
            <li className="col-md-3 col-sm-6 col-xs-6 mtrl-f-grids" style={{marginBottom:'15px'}} >
            <div className="fff">
                <div className="thumbnail">
                    <a >
                        <img src="/images/mf3.jpg" alt="" />
                    </a>
                    <p>
                        <span className="fa fa-hand-o-down" aria-hidden="true"></span>Course Name</p>
                </div>
                <div className="caption"  >
                    <h4>Description About Study Material</h4>
                    <p>Jose portilla</p>
                    <form >
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="edu_item" value="Book3" />
                        <input type="hidden" name="amount" value="30.00" />
                        <button type="button" className="edu-cart pedu-cart" style={{marginTop:'10px'}} >
                        <Link style={{color:'white'}} to="/course_enrollment" >
                            View more 
        </Link>
                            </button>
                        <a data-toggle="modal" data-target="#myModal1"></a>
                    </form>
                </div>
            </div>
        </li>
        );
    }
}

export default Course_enrollment;