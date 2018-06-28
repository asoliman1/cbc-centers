import React, { Component } from 'react';
import './wish.css';
import Wish_item from '../../components/wish_item/wish_item';
class wish extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        window.scrollTo(0, 0)
        
        return (
            <div className="page-wishlist">
                <ul>
                <Wish_item />
                <Wish_item />
                <Wish_item />
                <Wish_item />
                <Wish_item />
                <Wish_item />
                <Wish_item />
                <Wish_item />
                </ul>
            </div>
        );
    }
}

export default wish;