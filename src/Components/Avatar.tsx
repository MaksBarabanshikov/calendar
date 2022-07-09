import React from 'react';
import avatar from '../assets/images/avatar/avatar.jpg'
import {IUser} from "../models/models";

const user: IUser = {
    id: 12312,
    img: avatar,
    name: 'Коуч Елена Смирнова',
    description: 'Define the problem or question that.. </br>' +
        'the brainstorming session will aim to address. The question should be clear and concise. '
}

function Avatar() {
    return (
        <>
            <div className='max-w-[300px] m-auto'>
                <div className="inline-block rounded-full border-2 border-purple p-2">
                    <img className='rounded-full' src={user.img} alt=""/>
                </div>
                <h1>
                    {user.name}
                </h1>
                <p className="gray-text mb-11" dangerouslySetInnerHTML={{__html: user.description}}/>
            </div>
        </>
    );
}

export default Avatar;