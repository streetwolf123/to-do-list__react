import "./style.css"

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id} className={`list__task ${task.done && hideDone ? "list__tasks--hiden" : ""}`}>
                <button onClick={() => toggleTaskDone(task.id)} className="task__button task__button--toggleDone">
                    <i className={`${task.done ? "" : "button__toggleDone--none"}`}>✔</i>
                </button>

                <span className={`task__content ${task.done ? "task__content--done" : ""}`}>{task.content}</span>

                <button onClick={() => removeTask(task.id)} className="task__button task__buttonRemove">
                    🗑️
                </button>
            </li >
        ))}
    </ul >
);

export default Tasks;