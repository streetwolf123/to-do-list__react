import "./style.css"

const Buttons = ({tasks, hideDone, toggleHideDone, toggleAllTasksDone}) => (
    tasks.length > 0 && (
        <div className="section__buttons--flex">
            <button 
            onClick={toggleAllTasksDone} 
            className="section__button header__buttonToggleAllDone--flex" disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
            <button onClick={toggleHideDone} className="section__button">
                {hideDone ? "Pokaz" : "Ukryj"} ukończone
            </button>
        </div>
    )



);

export default Buttons;