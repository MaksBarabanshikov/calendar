import React, {ReactElement} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

interface ButtonProps {
    children: ReactElement
    to: string
}

const ButtonLink = ({children, to}: ButtonProps) => {
    return (
    <Link className='button block' to={to}>
        {children}
    </Link>
)
}

ButtonLink.propTypes = {
    children: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired
}

export default ButtonLink