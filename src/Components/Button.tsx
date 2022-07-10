import React, {ReactElement} from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
    children: ReactElement
    onClick: void
}

const Button = ({children, onClick}: ButtonProps) => {
    return (
        <button className='button' onClick={() => onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default Button;

