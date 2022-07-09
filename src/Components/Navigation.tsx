import React from 'react';
import bell from '../assets/images/nav/bell.svg'
import user from '../assets/images/nav/user.svg'
import calendar from '../assets/images/nav/calendar.svg'

function Navigation() {
    return (
        <nav className="navigation flex flex-col justify-end relative pb-6">
            <ul className="flex items-center justify-between px-10">
                <li className="inline-block"><img src={bell} alt=""/></li>
                <li className="
                    inline-block bg-purple sm-mobile:p-3.5 md-mobile:p-5
                    rounded-full absolute sm-mobile:top-5 md-mobile:top-5 left-1/2 translate-x-[-50%]"
                >
                    <img src={calendar} alt=""/>
                </li>
                <li className="inline-block"><img src={user} alt=""/></li>
            </ul>
        </nav>
    );
}

export default Navigation;