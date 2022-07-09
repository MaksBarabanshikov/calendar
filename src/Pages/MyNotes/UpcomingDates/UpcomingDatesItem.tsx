import React from 'react';
import design from '../../../assets/images/design-green.svg'
import brainstorm from '../../../assets/images/brainstorm-purple.svg'
import workout from '../../../assets/images/workout-blue.svg'
import {Dates, EnumCategory} from "./UpcomingDatesList";
import Options from "../../../Components/Options";
import UpcomingDatesDate from "./UpcomingDatesDate";

const UpcomingDatesItem = ({category, upcomingDates, dayOfWeek}: Dates) => {

    const currentImage = (string: EnumCategory) => {
        if (string === EnumCategory.Design) {
            return design

        }

        if (string === EnumCategory.Brainstorm) {
            return brainstorm

        }

        if (string === EnumCategory.Workout) {
            return workout

        }
    }


    return (
        <div className='min-h-[73px] mb-2'>
            <div className="flex justify-between items-center mb-2.5">
                <div className="flex items-center">
                    <img className="mr-2.5" src={category ? currentImage(category) : ''} alt=""/>
                    <span className='gray-text font-bold'>{dayOfWeek}</span>
                </div>
                <Options/>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
                {upcomingDates.map(dates => <UpcomingDatesDate key={Math.random()} date={dates}/>)}
            </div>
        </div>
    )
};

UpcomingDatesItem.propTypes = {};

export default UpcomingDatesItem;
