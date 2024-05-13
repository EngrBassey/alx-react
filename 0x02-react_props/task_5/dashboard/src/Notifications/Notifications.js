import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

function Notifications({ displayDrawer }) {
  return (
    <>
      {displayDrawer ? (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <button style={{
            float: 'right',
            marginTop: '-70px',
            backgroundColor: '#fff',
            border: 'none',
          }} aria-label='Close'>
            <img src={closeIcon} alt='close' />
          </button>
          <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem type='urgent' html={getLatestNotification()} />
          </ul>
        </div>
      ) : (
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
      )}

    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

export default Notifications;
