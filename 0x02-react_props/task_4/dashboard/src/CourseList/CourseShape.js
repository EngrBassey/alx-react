import React from 'react';
import PropTypes from 'prop-types'

const CourseShape = ({id, name, credit}) => {
  return (
    <div>
      
    </div>
  )
}

CourseShape.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
}
export default CourseShape
