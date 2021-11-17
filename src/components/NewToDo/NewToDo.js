import React from "react";

import Section from "../UI/Section";
import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {
  

  const handleEnterToDo = (toDoTitle, toDoDescription) => {
    const newToDo = {
      id: toDoTitle.length + Math.random(),
      title: toDoTitle,
      description: toDoDescription,
    }
    props.onAddToDo(newToDo);
  };

  return (
    <Section>
      <ToDoForm onEnterToDo={handleEnterToDo} />
    </Section>
  );
};

export default NewToDo;
