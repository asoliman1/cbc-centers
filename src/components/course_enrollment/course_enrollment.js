import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { doPayment } from '../../actions/index';
import { Rate, Icon, Button, Row, Spin, Popover, Radio, Input,Upload } from 'antd';
import './enrollments.css';
import { Translate } from '../../../node_modules/react-localize-redux';

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        // message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        // message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class Course_enrollment extends Component {
    constructor(props) {
        super(props);
        this.state = { ref_no: '',payment:this.props.payment,image:'' }
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
    handleImageChange = (info) => {
        console.log(info)
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
             this.setState({
                loading: false,
            });
        }
    }

    uploadPic(e){
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            console.log(reader.result)
            this.setState({image:reader.result})
            });
        reader.readAsDataURL(e.file);
    }


    render() {
        const elmAfter = (
            <div>
                <Button type="primary"  onClick={() => { this.props.doPayment(this.state.ref_no, this.props.id, this.props.round, this.props.cart,this.state.image);setTimeout(()=>{this.setState({payment:false}),1000}) }} > {this.props.lang==='ar'?'إدخال':'Submit'} </Button>
            </div>
        );
        const content = (
            <div>
                <Input addonBefore={this.props.lang==='ar'?'الرقم المرجعي':"Reference Number"}  onChange={(e) => { this.setState({ ref_no: e.target.value }) }} value={this.state.ref_no} placeholder={this.props.lang==='ar'?'الرقم المرجعي':'Reference Number'} /> <br/>
                <Upload 
                                      name="image"
                                      showUploadList={false}
                                      customRequest={(e)=>{this.uploadPic(e)}}
                                      beforeUpload={beforeUpload}
                                      onChange={this.handleImageChange}>
    <Button style={{border:0,marginTop:20,marginBottom:20}} >
      <Icon type="upload" /> {this.props.lang === 'ar' ? 'اضافه الصرره' :'Add Picture'}
    </Button>
  </Upload> {this.state.image!==''?<img className="small-img" src={this.state.image}/>:''}
   <div style={{textAlign:'center'}} >

  {elmAfter}
  </div>

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
                                    content={content} visible={this.state.visible} >
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