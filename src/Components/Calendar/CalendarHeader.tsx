import React from 'react'
import PropTypes from 'prop-types'
import Prev from "../Controls/Prev";
import Next from "../Controls/Next";
import {Moment} from "moment";

interface CalendarHeaderProps {
    today: Moment
    next: () => void
    prev: () => void
}

const CalendarHeader = ({today, prev, next}:CalendarHeaderProps) => {
    return (
        <div className="calendar__header relative text-center mt-14 mb-6">
            <h1>{today.format('MMMM')}</h1>
            <span className="gray-text">{today.format('YYYY')}</span>
            <div className="calendar__control px-2 absolute w-full flex justify-between top-1/2 translate-y-[-50%]">
                <Prev onClick={prev}/>
                <Next onClick={next}/>
            </div>
        </div>
    )
}

CalendarHeader.propTypes = {
    today: PropTypes.object.isRequired
}

export default CalendarHeader