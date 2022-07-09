import React, {ReactElement} from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
    children: ReactElement
}

const Button = ({children}: ButtonProps) => {
    return (
        <button>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.object.isRequired
};

export default Button;

