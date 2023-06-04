import "./style.css"

import { TasksList, Task, TaskContent, Button, I } from "./styled";


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TasksList>
        {tasks.map(task => (
            <Task key={task.id} hidden={task.done && hideDone}>
                <Button
                    onClick={() => toggleTaskDone(task.id)}
                    toggleDone
                >
                    <I done={task.done}>✔</I>
                </Button>

                <TaskContent line={task.done}>{task.content}</TaskContent>

                <Button
                    onClick={() => removeTask(task.id)}
                    remove
                >
                    🗑️
                </Button>
            </Task >
        ))}
    </TasksList >
);

export default Tasks;