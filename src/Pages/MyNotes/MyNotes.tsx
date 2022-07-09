import React, {ReactElement} from 'react';
import Avatar from "../../Components/Avatar";
import Button from "../../Components/Button";
import UpcomingDates from "./UpcomingDates/UpcomingDates";

function MyNotes() {
    const text: ReactElement = <span>Записаться на консультацию</span>
    return (
        <div className="pt-24 m-auto">
            <Avatar/>
            <Button children={text}></Button>
            <UpcomingDates/>
        </div>
    );
}

export default MyNotes;