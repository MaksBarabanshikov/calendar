import React from 'react';
import UpcomingDatesItem from "./UpcomingDatesItem";

export enum EnumCategory {
    Brainstorm = 'Brainstorm',
    Design = 'Design',
    Workout = 'Workout'
}

export interface Dates {
    id: number
    category: EnumCategory
    dayOfWeek: string
    upcomingDates: Array<string>
}

export const data: Dates[] = [
    {
        id: 1234,
        category: EnumCategory.Design,
        dayOfWeek: 'Понедельник',
        upcomingDates: ['12:00 - 13:00', '14:00 - 15:00']
    },
    {
        id: 3245632,
        category: EnumCategory.Brainstorm,
        dayOfWeek: 'Вторник',
        upcomingDates: [
            '10:00 - 11:00', '11:00 - 12:00', '14:00 - 15:00',
            '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00'
        ]
    },
    {
        id: 3452312,
        category: EnumCategory.Workout,
        dayOfWeek: 'Четверг',
        upcomingDates: ['12:00 - 13:00', '14:00 - 15:00']
    }
]

const UpcomingDatesList = () => {
    return (
        <>
            {data && data.map(item => <UpcomingDatesItem key={item.id} {...item}/>)}
        </>

    )
}

export default UpcomingDatesList;
