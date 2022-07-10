import React, { useState } from 'react'
import moment from "moment";
import CalendarDate from "./CalendarDate";
import CalendarHeader from "./CalendarHeader";

const Calendar = () => {
    const [today, setToday] = useState(moment())
    const startDay = today.clone().startOf('month').startOf('week')
    // const endDay = moment().endOf('month').endOf('week')

    const day = startDay.clone().subtract(1, 'day')

    const totalDay = 35
    const daysArray = [...Array(totalDay)].map(() => day.add(1, 'day').clone())

    const weekendArray = [...Array(7)].map((_, index) => moment().day(index + 1).format('ddd'))

    const isCurrentDay = (day: moment.MomentInput):boolean => moment().isSame(day, 'day')

    const nextHandler = () => {
        setToday(prev => prev.clone().add(1, 'month'))
    }
    const prevHandler = () => {
        setToday(prev => prev.clone().subtract(1, 'month'))
    }

    return (
        <>
            <CalendarHeader
                today={today}
                next={nextHandler}
                prev={prevHandler}
            />
            <div className="grid grid-cols-7 grid-rows-[repeat(5,37px)_20px]">
                {weekendArray.map(week => <div key={week} className="text-gray-black">{week}</div>)}
                {
                    daysArray.map(dayItem => <CalendarDate
                        key={dayItem.format('DDMMYYYY')}
                        date={dayItem.format('D')}
                        currentDay={isCurrentDay(dayItem)}
                    />)
                }
            </div>
        </>
    )
}

export default Calendar