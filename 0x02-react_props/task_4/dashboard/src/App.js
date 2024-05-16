import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import PropsTypes from 'prop-types';
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: getLatestNotification() },
];

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className='App'>
        <Header />
        {isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        <Footer />
      </div>
    </React.Fragment>
  );
}
App.defaultProps = {
  isLoggedIn: false,
}

App.propsTypes = {
  isLoggedIn: PropsTypes.bool,
}

export default App;
