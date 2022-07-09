import React from 'react';
import UpcomingDatesList from "./UpcomingDatesList";

const UpcomingDates = () => {
    return (
        <>
            <h1 className="text-left mb-3.5"> Ближайшие свободные даты </h1>
            <UpcomingDatesList/>
        </>
    );
};

UpcomingDates.propTypes = {

};

export default UpcomingDates;
