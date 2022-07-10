import React from 'react'
import PropTypes from 'prop-types'
import next from "../../assets/images/control-next.svg"

interface NextProps {
    onClick: () => void
}

const Next = ({onClick}: NextProps) => {
    return (
        <span
            className="calendar__control_prev w-[34px] h-[34px] border border-[#CED3DE] flex items-center justify-center rounded-lg"
            onClick={onClick}
        >
            <img src={next} alt="Вперед"/>
        </span>
    )
}

Next.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Next