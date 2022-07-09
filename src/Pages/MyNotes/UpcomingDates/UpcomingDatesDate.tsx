import React from 'react'
import PropTypes from "prop-types";


interface dateProps {
    date: string
}

const UpcomingDatesDate = ({date}: dateProps) => <div className="gray-text py-1.5 border border-[#EDF1F7] rounded-lg">{date}</div>

UpcomingDatesDate.propTypes = {
    date: PropTypes.string.isRequired
}

export default UpcomingDatesDate