import React from 'react'
import './Notifications.css';

export const NotificationItem = (props) => {
  return (
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>
        {props.value}
    </li>
  )
}
