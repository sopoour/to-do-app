import Section from "../UI/Section";
import ToDoItem from "./ToDoItem";
import classes from "./ToDos.module.css";

const ToDos = (props) => {
  const handleRemove = (id) => {
    //remove the item from the task lists that matches the id where the remove button was clicked
    const removeItem = props.items.filter((toDo) => {
      //return the filtered task array without the removed task
      return toDo.id !== id;
    });
    props.onRemoveToDo(removeItem);
  };

  let taskList = <h2>No to dos found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            task={toDo}
            onRemove={() => handleRemove(toDo.id)}
          ></ToDoItem>
        ))}
      </ul>
    );
  }

  return (
    <Section>
      <div className={classes.container}>{taskList}</div>
    </Section>
  );
};

export default ToDos;
