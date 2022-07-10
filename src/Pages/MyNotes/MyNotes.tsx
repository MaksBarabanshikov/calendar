import React, {ReactElement} from 'react';
import Avatar from "../../Components/Avatar";
import UpcomingDates from "./UpcomingDates/UpcomingDates";
import {useNavigate} from "react-router-dom";
import ButtonLink from "../../Components/ButtonLink";

function MyNotes() {
    const text: ReactElement = <span>Записаться на консультацию</span>
    const navigate = useNavigate()
    return (
        <div className="pt-24 m-auto">
            <Avatar/>
            <ButtonLink to={'/consultation'} children={text}></ButtonLink>
            <UpcomingDates/>
        </div>
    );
}

export default MyNotes;