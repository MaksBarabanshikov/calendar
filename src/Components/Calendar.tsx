import React from 'react'
import moment from "moment";

const Calendar = () => {

    const startDay = moment().startOf('month').startOf('week')
    const endDay = moment().endOf('month').endOf('week')

    const calendar = []
    const day = startDay.clone()

    while (!day.isAfter(endDay)) {
        calendar.push(day.clone())
        day.add(1, 'day')
    }

    console.log(calendar)

    return (
        <div>

        </div>
    )
}

export default Calendar