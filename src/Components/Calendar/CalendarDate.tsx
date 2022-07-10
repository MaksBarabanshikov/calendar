import React from 'react'
import PropTypes from 'prop-types'

interface dateProps {
    date: string
    currentDay: boolean
}

const CalendarDate = ({date, currentDay}: dateProps) => {
    return (
        <div className={`
            calendar__date flex items-center justify-center
            relative w-[30px] h-[30px] m-auto text-base
            ${currentDay ? 'active' : ''}
        `}>
            {date}
        </div>
    )
}

CalendarDate.propTypes = {
    date: PropTypes.string.isRequired,
    currentDay: PropTypes.bool.isRequired
}

export default CalendarDate