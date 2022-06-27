import React, { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [isNameInputTouched, setIsNameInputTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailInputTouched, setIsEmailInputTouched] = useState(false);

  let isNameValid = false;
  if (enteredName.trim() !== "") isNameValid = true;

  let isEmailValid = false;
  if (enteredEmail.includes('@')) isEmailValid = true;

  const changeNameHandler = (event) => { 
    setEnteredName(event.target.value);
  };

  const blurNameHandler = event => { 
    setIsNameInputTouched(true);
  };

  const changeEmailHandler = (event) => { 
    setEnteredEmail(event.target.value);
  };

  const blurEmailHandler = event => { 
    setIsEmailInputTouched(true);
  };

  const nameInputIsInvalid = !isNameValid && isNameInputTouched;
  const emailInputIsInvalid = !isEmailValid && isEmailInputTouched;

  const nameInputClasses = nameInputIsInvalid ? 'input invalid' : 'input';
  const emailInputClasses = emailInputIsInvalid ? 'input invalid' : 'input';

  const submitHandler = (event) => {
    event.preventDefault(); 

    if(!isNameValid || !isEmailValid)return;

    setEnteredName('');
    setIsNameInputTouched(false);

    setEnteredEmail('');
    setIsEmailInputTouched(false);
  };

  const isFormValid = isNameValid && isEmailValid;

  return (
    <form onSubmit={submitHandler} className="simple-input">
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          className={nameInputClasses}
          onChange={changeNameHandler}
          onBlur={blurNameHandler}
          id="name"
          type="text"
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input
          className={emailInputClasses}
          onChange={changeEmailHandler}
          onBlur={blurEmailHandler}
          id="email"
          type="text"
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Entered email is not valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
