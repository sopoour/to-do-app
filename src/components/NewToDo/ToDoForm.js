import React from "react";

import classes from "./ToDoForm.module.css";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => {
  return value.trim() !== "";
};

const ToDoForm = (props) => {
  const {
    value: enteredTitle,
    isValid: enteredNameIsValid,
    hasError: titleHasError,
    handleValueChange: handleTitleChange,
    handleInputBlur: handleTitleBlur,
    reset: titleReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionHasError,
    handleValueChange: handleDescriptionChange,
    handleInputBlur: handleDescriptionBlur,
    reset: descriptionReset,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (enteredNameIsValid && enteredDescriptionIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    //prevent that request is sent and that the page reloads when I click on "add task" button
    event.preventDefault();

    //when form is not valid then exit
    if (!formIsValid) {
      return;
    }
    console.log(enteredTitle);
    //if form is valid then submit data
    props.onEnterToDo(enteredTitle, enteredDescription);
    titleReset();
    descriptionReset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputArea}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
          />
          {titleHasError && (
            <p className={classes.errorText}>Title must not be empty.</p>
          )}
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={handleDescriptionChange}
            onBlur={handleDescriptionBlur}
          />
          {descriptionHasError && (
            <p className={classes.errorText}>Description must not be empty.</p>
          )}
        </div>
      </div>

      <button disabled={!formIsValid}>Add To-Do</button>
    </form>
  );
};

export default ToDoForm;
