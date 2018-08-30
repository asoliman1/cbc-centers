import React, { Component } from 'react';
import './notifications.css'
import Notification_item from '../../components/notifications_item/notification_item';
class notifications extends Component {
    render() {
        return (
            <div className="page-notifications">
                <div>
                    <ul class="list-group">
                        <Notification_item />
                        <Notification_item />
                        <Notification_item />
                        <Notification_item />
                        <Notification_item />
                        <Notification_item />
                        <Notification_item />
                    </ul>
                </div>
            </div>
        );
    }
}

export default notifications;