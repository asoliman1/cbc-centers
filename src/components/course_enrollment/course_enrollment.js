import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { doPayment } from '../../actions/index';
import { Rate, Icon, Button, Row, Spin, Popover, Radio, Input } from 'antd';
import './enrollments.css';
import { Translate } from '../../../node_modules/react-localize-redux';
class Course_enrollment extends Component {
    constructor(props) {
        super(props);
        this.state = { ref_no: '',payment:this.props.payment }
    }
    componentDidMount() {
        console.log(this.props)

    }
    hide = () => {
        this.setState({
            visible: false,
        });
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });

    }


    render() {
        const elmAfter = (
            <div>
                <Button type="primary" onClick={() => { this.props.doPayment(this.state.ref_no, this.props.id, this.props.round, this.props.cart);setTimeout(()=>{this.setState({payment:false}),1000}) }} > {this.props.lang==='ar'?'إدخال':'Submit'} </Button>
            </div>
        );
        const content = (
            <div>
                <Input addonAfter={elmAfter} onChange={(e) => { this.setState({ ref_no: e.target.value }) }} value={this.state.ref_no} placeholder={this.props.lang==='ar'?'الرقم المرجعي':'Reference Number'} />
            </div>
        );
        return (
            // 
            <li className="col-md-3 col-sm-6 col-xs-6 mtrl-f-grids" style={{ marginBottom: '15px',float:this.props.lang==='ar'?'right':'' }} >
                <div className="fff">
                    <div className="thumbnail">
                        <a >
                            <img src={this.props.course_details.image?'http://167.99.244.62:8000'+this.props.course_details.image:'./images/error.png'} onError={(e) => { e.target.src = './images/error.jpg' }} alt={this.props.course_details.name_e} />
                        </a>
                        <p>
                          {this.props.lang==='ar'?this.props.course_details.name_a:this.props.course_details.name_e}</p>
                    </div>
                    <div className="caption"  >
                        <h4>{this.props.lang==='ar'?this.props.course_details.short_desc_a:this.props.course_details.short_desc_e}</h4>
                        <p>{} </p>
                        <form >
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="edu_item" value="Book3" />
                            <input type="hidden" name="amount" value="30.00" />
                            <button type="button" className="edu-cart pedu-cart" style={{ marginTop: '10px' }} >

{this.state.payment? 
                                <Popover
                                    trigger="click"
                                    onVisibleChange={this.handleVisibleChange}
                                    content={content} visible={this.state.visible} title={this.props.lang==='ar'?"اضف الرقم المرجعي للمعاملة في الحقل أدناه والضغط على الزر":"Add the transaction reference number in the below field and press the button"}>
                                    <a style={{ color: 'white' }}  >
                                        {this.props.lang==='ar'?'إضافه الرقم المرجعي':'Add Reference Number'}
        </a>
                                </Popover>:
<Link to={{pathname:'courses/'+this.props.id}} style={{color:'white'}} > <Translate id="more" /> </Link> }
                            </button>
                            <a data-toggle="modal" data-target="#myModal1"></a>
                        </form>
                    </div>
                </div>
            </li>
        );
    }
}
function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, { doPayment })(Course_enrollment);