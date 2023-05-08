import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";
import Container from "./Container"
import React, { useState, useEffect } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);


  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("localTasks")) || []);

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
  }, [tasks])



  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };



  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }))
  };

  const toggleAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true, })))

  }

  const addNewTask = (newTaskContent) => {
    if(newTaskContent !== "") {
      setTasks(tasks => [
        ...tasks,
        {
          content: newTaskContent,
          done: false,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        }
      ]);
  
    } 
    
  }

  return (
    <Container>
      <Header
        title="Lista Zadań" />
      <Section
        title="Dodaj Nowe Zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />}
      />
      <Section
        title="Lista Zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            toggleAllTasksDone={toggleAllTasksDone}
          />
        }
        body={
          <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
        }

      />
    </Container>
  );
}

export default App;
