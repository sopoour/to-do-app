import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //check validity of enteredValue
  const valueIsValid = validateValue(enteredValue);
  //show error message under respective input field if the value is not valid and the user clicked into the field
  const hasError = !valueIsValid && isTouched;

  const handleValueChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleInputBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    handleValueChange,
    handleInputBlur,
    reset,
  };
};

export default useInput;
