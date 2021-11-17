import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  return (
    <li className={classes.task}>
      <div className={classes.text}>
        <h1>{props.task.title}</h1>
        <p>{props.task.description}</p>
      </div>
      <button onClick={props.onRemove}>Remove</button>
    </li>
  );
};

export default ToDoItem;
