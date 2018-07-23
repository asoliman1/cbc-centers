import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userProfile,editProfile } from '../../actions/index';
import './myprofile.css';
import { Row, Col, Card, Icon, Button, Switch, List, Input, Tooltip, Tag, Timeline, Divider,DatePicker } from 'antd';
import moment from 'moment';
const { Meta } = Card;
const { TextArea } = Input;


const tabList = [{
    key: 'tab1',
    tab: 'Profile',
}
// , {
//     key: 'tab2',
//     tab: 'Courses',
// }, {
//     key: 'tab3',
//     tab: 'Activities',
// }
];



const dateFormat = 'YYYY/MM/DD';

class myprofile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 'tab1',
            noTitleKey: 'app',
            edit: false,
            tags: ['Tag 1', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: '',
            user:{}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentWillMount(){
        window.scroll(0, 0)
        let user ={last_name:'sds',first_name:'asa'};
        user = (({first_name})=>({first_name}))(user)
        console.log(user)

    }
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        let obj = this.state.user;
         obj[e.target.name] = e.target.value;
        this.setState({ user: obj });
    }

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    }

    saveInputRef = input => this.input = input

    componentDidMount() {
        this.props.userProfile()
    }
    handleDateChange(e,d_string){
        console.log(e,d_string)
        let user = this.state.user;
        user['birth_date']=d_string
        user['_birth_date']=e
        this.setState({user:user})
    }

    onChange(checked) {
        console.log(checked)
        this.setState({ edit: checked });
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }

    Save(){
        this.props.editProfile(this.state.user);
        this.setState({edit:false})
    }

    componentWillReceiveProps(){
        let user = (({first_name,last_name,birth_date,skype,facebook,youtube,google,email,gender,linkedin,location,mobile,phone})=>({first_name,last_name,birth_date,skype,facebook,youtube,google,email,gender,linkedin,location,mobile,phone}))(this.props.profile)
        this.setState({user:user})
    }


    render() {
        const { tags, inputVisible, inputValue } = this.state;

        const data = [

            {
                title: <div>  <Icon style={{ fontSize: 23 }} type="mail" /> </div>,
                value: this.props.profile.email,
                placeholder:'Email',
                input:'email'

            },
            {
                title: <div>  <Icon style={{ fontSize: 23 }} type="github" /> </div>,
                value: this.props.profile.github,
                placeholder:'Github',
                input : 'github'
            },
            {
                title: <div>  <Icon style={{ fontSize: 23, color: '#3B5998' }} type="facebook" /> </div>,
                value: this.props.profile.facebook,
                placeholder:'Facebook',
                input:'facebook'

            },
            {
                title: <div>  <Icon style={{ fontSize: 23, color: '#0077B5' }} type="linkedin" /> </div>,
                value: this.props.profile.linkedin,
                placeholder:'LinkedIn',
                input:'linkedin'

            },
            {
                title: <div>  <Icon style={{ fontSize: 23, color: '#FF0000' }} type="youtube" /> </div>,
                value: this.props.profile.youtube,
                placeholder:'Youtube',
                input:'youtube'

            },
            {
                title: <div>  <Icon style={{ fontSize: 23, color: '#db3236' }} type="google-plus" /> </div>,
                value: this.props.profile.google,
                placeholder : 'Google Plus',
                input:'google'
            },
            {
                title: <div>  <Icon style={{ fontSize: 23, color: '#00AFF0' }} type="skype" /> </div>,
                value: this.props.profile.skype,
                placeholder:'Skype',
                input:'skype'
            },

        ];



        const data1 = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 5',
            },
            {
                title: 'Title 6',
            },
        ];

        const data2 = [
            {
                title: 'Firstname :',
                value: this.props.profile.first_name,
                input:'first_name'
            },
            {
                title: 'Lastname :',
                value: this.props.profile.last_name,
                input:'last_name'
            },
            {
                title: 'Birthdate :',
                value: moment(this.props.profile.birth_date,dateFormat) ,
                input:'birth_date'
            },
            {
                title: 'Phone :',
                value: this.props.profile.phone,
                input:'phone'

            },
            {
                title: 'Mobile :',
                value: this.props.profile.mobile,
                input:'mobile'

            },
            {
                title: 'Location :',
                value: this.props.profile.location,
                input:'location'

            },
        ];

        const contentList = {
            tab1: <div>
                <Switch  onChange={(e) => this.onChange(e)} style={{ float: 'right' }}  unCheckedChildren={<Icon type="edit" />} />

                <Divider><h3> <Icon type="user" /> ABOUT </h3> </Divider>
                <Row style={{ padding: '10px' }} >
                    <List split style={{ padding: '16px' }} bordered
                        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 3, xxl: 3 }}
                        dataSource={data2}
                        renderItem={item => (
                            <List.Item>
                                {this.state.edit ? <div> {item.title}{item.input==='birth_date'?<div> <DatePicker  onChange={this.handleDateChange} defaultValue={item.value} value={this.state.user['_birth_date']} /></div>: <Input  onChange={this.handleInputChange} value={this.state.user[item.input]} name={item.input} /> }</div> : <div> {item.title}  {item.input==='birth_date'?moment(item.value).format('MMMM Do YYYY'):item.value}  </div>}
                            </List.Item>
                        )}
                    />
                </Row>
                <Divider style={{ marginTop: 16 }} ><h3> <Icon type="fork" /> Social </h3> </Divider>
                <Row style={{ padding: '10px' }} >
                    <List split style={{ padding: '16px' }} bordered
                        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 3, xxl: 3 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                {this.state.edit ? <div> {item.title} <Input placeholder={item.placeholder}  defaultValue={item.value}  onChange={this.handleInputChange} value={this.state.user[item.input]} name={item.input} /> </div> : <div> {item.title}  {item.value}  </div>}
                            </List.Item>
                        )}
                    />
                </Row>
                <Divider style={{ marginTop: 16 }} ><h3> <Icon type="profile" /> Details </h3> </Divider>
                <Row style={{ padding: '10px' }} >
                    {this.state.edit ? <div>
                        <TextArea placeholder="BIO" style={{ marginBottom: 20 }} autosize />
                        <TextArea placeholder="About" autosize />
                    </div> : <div>
                            <List
                                bordered
                                dataSource={['Bio : i am ahmed ', 'About : i am ahmed']}
                                renderItem={item => (<List.Item>{item}</List.Item>)}
                            />

                        </div>}

                </Row>
                {/* <Divider style={{ marginTop: 16 }} ><h3> <Icon type="heart" /> Interests </h3> </Divider> */}
                {/* <Row style={{ padding: '10px' }} >
                    <div>
                        {tags.map((tag, index) => {
                            const isLongTag = tag.length > 20;
                            const tagElem = (
                                <Tag color="orange" key={tag} closable={this.state.edit} afterClose={() => this.handleClose(tag)}>
                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </Tag>
                            );
                            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                        })}
                        {inputVisible && (
                            <Input
                                ref={this.saveInputRef}
                                type="text"
                                size="small"
                                style={{ width: 78 }}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputConfirm}
                                onPressEnter={this.handleInputConfirm}
                            />
                        )}
                        {!inputVisible && this.state.edit && (
                            <Tag
                                onClick={this.showInput}
                                style={{ background: '#fff', borderStyle: 'dashed' }}
                            >
                                <Icon type="plus" /> New Tag
          </Tag>
                        )}
                    </div>
                </Row> */}
                <div style={{ textAlign: 'center' }} > <Button style={{ background: '#e34b11', color: 'white' }} onClick={()=>{this.Save()}} >Save {this.props.loading.editprofile===1?<Icon type="loading" style={{color:'white'}} />: <Icon type="save" />} </Button></div></div>,
            // tab2: <div>    <List
            //     grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 3, xxl: 3 }}
            //     dataSource={data1}
            //     renderItem={item => (
            //         <List.Item>
            //             <Card title={item.title}>Card content</Card>
            //         </List.Item>
            //     )}
            // /> </div>,
            // tab3: <div>

            //     <Timeline>
            //         <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            //         <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            //         <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
            //         <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            //     </Timeline>
            // </div>
        };
        return (
            <div className="myprofile-page" >
                <Row gutter={6} >
                    <Col xs={25} sm={25} md={6} lg={5} xl={5} style={{ display: 'flex', justifyContent: 'space-around' }}  >  <Card

                        hoverable
                        style={{ borderBottom: '3px solid #035ea4', marginBottom: '16px' }}
                        cover={<img alt={this.props.profile.username} src={this.props.profile.image?this.props.profile.image:'./images/error.jpg'} />}
                    >
                        <Meta
                            title={this.props.profile.username}
                            description={'Created at : '+this.props.profile.creation_time}
                        />

                    </Card> </Col>
                    <Col xs={25} sm={25} md={18} lg={19} xl={19} style={{ padding: '10px' }} >
                        <Card

                            style={{ width: '100%', fontSize: '15px' }}
                            tabList={tabList}
                            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                        >
                            {contentList[this.state.key]}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { profile: state.profile, loading: state.loadingBar };
}

export default connect(mapStateToProps, { userProfile,editProfile })(myprofile);