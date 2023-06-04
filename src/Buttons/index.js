import { SectionButtons, Button } from "./styled";



const Buttons = ({ tasks, hideDone, toggleHideDone, toggleAllTasksDone }) => (
    tasks.length > 0 && (
        <SectionButtons>
            <Button
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaz" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={toggleAllTasksDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </SectionButtons>
    )



);

export default Buttons;