import React, { Component } from 'react';
import './notification_item.css';
class Notification_item extends Component {
    render() {
        return (
                <li class="list-group-item" style={{borderLeft:'6px solid blue',width:'80%',margin:'auto',marginBottom:'20px'}} >
                    <span class="badge">14</span>

                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object img-rounded" src="/images/m1.jpg" alt="..."  />
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading lead">Media heading</h4>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="text-right" >Date  <cite title="Source Title ">At : 12/2/2019</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </li>
        );
    }
}

export default Notification_item;