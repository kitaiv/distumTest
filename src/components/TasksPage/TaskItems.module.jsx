import React from 'react'

const TaskItems = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="task-item" key={i}>
                    <h3 className="task-item__title">{item.title}</h3>
                    <div className="task-item__reward">Вознаграждение: <span>{item.reward}D</span></div>
                    <a href="#" className="btn">Детали</a>
                </div>
            ))}
        </>
    )
}

export default TaskItems