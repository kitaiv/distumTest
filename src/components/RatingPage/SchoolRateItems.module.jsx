import React from 'react'

const SchoolRateItems = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="rating-rows__item">
                    <p>Гимназия №115</p>
                    <p>34754</p>
                </div>
            ))}
        </>
    )
}

export default SchoolRateItems