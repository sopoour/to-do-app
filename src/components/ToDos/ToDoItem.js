import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  return (
    <li className={classes.task}>
      <h1>{props.task.title}</h1>
      <p>{props.task.description}</p>
      <button onClick={props.onRemove}>Remove</button>
    </li>
  );
};

export default ToDoItem;
