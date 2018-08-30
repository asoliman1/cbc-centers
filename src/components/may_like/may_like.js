import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Translate} from 'react-localize-redux';
import moment from 'moment'
class May_like extends Component {
    render() {
        const months = Math.abs(  moment(this.props.details.end_date).diff(moment(this.props.details.start_date), 'months') )
        const days = Math.abs(  moment(this.props.details.end_date).diff(moment(this.props.details.start_date), 'days') )
        return (
            <div style={{marginBottom:15}} className="col-xs-6 exce-grid1-mmstyle">
            <Link to={{pathname:`/courses/${this.props.details.id}`}} >
                <img src={this.props.details.image} onError={(e) => { e.target.src = '/images/error.jpg' }}  />
            </Link>
            <div className="grid-ec1">
                
            <Link style={{color:'white',fontSize:'20px',whiteSpace:'nowrap',textOverflow:'ellipse'}} to={{pathname:`/courses/${this.props.details.id}`}} >
                    {this.props.language==='ar'?this.props.details.name_a:this.props.details.name_e} </Link>

                <p style={{whiteSpace:'nowrap'}} >{this.props.language==='ar'?this.props.details.short_desc_a:this.props.details.short_desc_e}</p>
                <h4>
                    <span className="fa fa-calendar" aria-hidden="true"> {months>0?<span>{months} <Translate id="months" /></span> :<span>{days} <Translate id="days" /></span>} </span></h4>
            </div>
        </div>
        );
    }
}

export default May_like;