import React, { createContext, useState } from 'react'

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { title: "Read The Book", id: 1 },
        { title: "Write The Copy", id: 2 },
        { title: "Write Some Code ", id: 3 }
    ]);
    return (
        <TaskListContext.Provider value={{ tasks }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;

