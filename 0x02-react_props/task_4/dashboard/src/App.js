import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import PropsTypes from 'prop-types';
import CourseList from './CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className='App'>
        <Header />
        {isLoggedIn ? <Login /> : <CourseList />}
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
