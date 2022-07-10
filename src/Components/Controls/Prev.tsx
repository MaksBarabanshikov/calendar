import React from 'react'
import PropTypes from 'prop-types'
import prev from "../../assets/images/control-prev.svg"

interface PrevProps {
    onClick: () => void
}

const Prev = ({onClick}: PrevProps) => {
    return (
        <span
            className="calendar__control_prev w-[34px] h-[34px] border border-[#CED3DE] flex items-center justify-center rounded-lg"
            onClick={onClick}
        >
            <img src={prev} alt="Назад"/>
        </span>
    )
}

Prev.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Prev