import React, { useEffect, useState } from "react";

import ToDos from "./components/ToDos/ToDos";
import NewToDo from "./components/NewToDo/NewToDo";

function App() {
  const [toDos, setToDos] = useState(() => {
    // get the todos from localstorage
    const savedToDos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedToDos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedToDos);
    } else {
      // return an empty array
      return [];
    }
  });

  const handleAddToDo = (toDo) => {
    setToDos((prevToDos) => {
      return [toDo, ...prevToDos];
    });
  };

 const handleRemoveToDo = (filteredTasks) => {
   setToDos(filteredTasks)
 }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <React.Fragment>
      <h1 style={{color: "white", textAlign: "center", fontSize: "2.5rem"}}>My To Do List</h1>
      <NewToDo onAddToDo={handleAddToDo} />
      <ToDos items={toDos} onRemoveToDo={handleRemoveToDo} />
    </React.Fragment>
  );
}

export default App;
