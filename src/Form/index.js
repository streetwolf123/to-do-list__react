import React, {useState} from "react";
import "./style.css"

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onInputChange = ({target}) => setNewTaskContent(target.value)

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
    };



    
    return (
        <form onSubmit={onFormSubmit} className="form">
            <input 
            value={newTaskContent} 
            onChange={onInputChange} 
            type="text" 
            className="form__input" 
            placeholder="Co jest do zrobienia?" 
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form;