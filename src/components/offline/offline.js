import React, { Component } from 'react';

class Offline_comp extends Component {
    render() {
        return (
            <div className="animated flipInX" style={{background:'linear-gradient(145deg,#fff,#04bafe)'}} >
                <div style={{padding:50}} > <img src="/images/cbclogo.png" /> 
                <h3 style={{textAlignLast:'end',color:'white'}} > You Are Offline , Check Your Connection </h3>
                </div>
            </div>
        );
    }
}

export default Offline_comp;