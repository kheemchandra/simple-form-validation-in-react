import { useState } from "react";

const useInput = (validateValue) => {  
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  let isValueValid = false;
  if(validateValue(enteredValue)) isValueValid = true;

  const changeValueHandler = event => {
    setEnteredValue(event.target.value);
  };

  const blurValueHandler = event => {
    setIsInputTouched(true);
  }

  const reset = () => {
    setEnteredValue('');
    setIsInputTouched(false);
  }

  return {
    value: enteredValue,
    isInputTouched,
    isValid: isValueValid,
    changeValueHandler,
    blurValueHandler,
    reset,
  };

};

export default useInput;