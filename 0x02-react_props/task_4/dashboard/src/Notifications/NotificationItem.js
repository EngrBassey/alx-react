import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types'

const NotificationItem = ({ type, html, value }) => {
  return (
    <>
        {type && value ? <li data-notification-type={type}>{value}</li> : null}
        {html ? <li data-urgent dangerouslySetInnerHTML={{__html: html}}></li> : null}
    </>
    
)
}

NotificationItem.propsTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
        html: PropTypes.string,
  })
}

export default NotificationItem
