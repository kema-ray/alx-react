import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils'
import closeIcon from './close-icon.png'
import { NotificationItem } from './NotificationItem';


function Notifications() {
    return (
        <div className='Notifications'>
            <p style={{ display: 'inline', marginRight: '80%'}}>
                Here is the list of notifications
            </p>
            <button aria-label='Close'
            onClick={console.log('Close button has been clicked')}>
                <img style={{ display: 'inline'}} src={closeIcon} alt='Close' />
            </button>
            <ul>
                <NotificationItem type='default' value="New course available" />
                <NotificationItem type='urgent' value="New resume available" />
                <NotificationItem type='urgent' html={{__html: getLatestNotification()}} />
            </ul>
        </div>
    )
}

export default Notifications;
