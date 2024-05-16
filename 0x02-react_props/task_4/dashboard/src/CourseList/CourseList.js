import React from 'react';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

const CourseList = ({ listCourses }) => {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow
                    textFirstCell="Available courses"
                    textSecondCell={null}
                    isHeader={true}
                />
                <CourseListRow
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                    isHeader={true}
                />
                <tbody>
                    {listCourses.length > 0 ? (
                        listCourses.map(({id, name, credit}) =>
                            <CourseListRow
                                key = { id }
                                textFirstCell={name}
                                textSecondCell={credit}
                            />
                    )) : (
                        <CourseListRow textFirstCell='No course available yet' />
                    )}
                </tbody>

            </thead>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}
CourseList.defaultProps = {
    listCourses: [],
}
export default CourseList
