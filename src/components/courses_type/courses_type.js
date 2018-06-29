import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'antd';
const { Meta } = Card;


class Courses_type extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
        console.log(this.props)
    }

    closeModal() {
    }

    render() {
        return (
            <div>
                <div className="col-md-3 col-sm-6 tabsf-w3-agileits-grids">
                    <Card hoverable loading={this.props.loading}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[<Button type="primary" > <Link style={{color:'white'}} to={{pathname:`courses/${this.props.id}`,state:this.props.course}} > More Details<Icon type="ellipsis" /> </Link> </Button>]}
                    >
                        <Meta
                            title={this.props.name}
                            description={this.props.desc}
                        />
                    </Card>
                    {/* <img src="/images/bbf1.jpg" alt="" />
                    <div className="img-caption">
                        <div className="tabs-inn-info-agileits-w3layouts">
                            {this.props.text ?
                                <Link to="/courses" className="buttonf">Know More</Link>
                                :
                                <a className=" buttonf" onClick={() => { this.setState({ open: true }) }} >
                                    <span className="fa fa-play-circle-o" aria-hidden="true"></span>
                                </a>
                            }
                        </div>
                    </div>
                    <h3 className="sub-w3ls-headf">{this.props.name}</h3>
                    <p className="paragraphf">{this.props.desc}
                    <Button style={{ float: 'right' }} type="primary">More</Button>

                    </p>

                </div>
                <Modal show={this.state.open}
                    onHide={() => {
                        this.setState({ open: false })
                    }}
                    aria-labelledby="ModalHeader" >

                    <div className="modal-content">
                        <div className="modal-header" style={{ padding: '5px', border: '0' }} >
                            <button type="button" className="close" onClick={() => {
                                this.setState({ open: false })

                            }}  >
                                <span style={{ fontSize: '50px' }} aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div style={{ position: 'relative', textAlign: 'center' }} >
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/heH9MyHSERU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>                    </div>
                    </div>

                </Modal> */}
                </div>

            </div>
        );
    }
}

export default Courses_type;