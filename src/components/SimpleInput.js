import useInput from "../hooks/use-Input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isInputTouched: isNameInputTouched,
    isValid: isNameValid,
    changeValueHandler: changeNameHandler,
    blurValueHandler: blurNameHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isInputTouched: isLastNameInputTouched,
    isValid: isLastNameValid,
    changeValueHandler: changeLastNameHandler,
    blurValueHandler: blurLastNameHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isInputTouched: isEmailInputTouched,
    isValid: isEmailValid,
    changeValueHandler: changeEmailHandler,
    blurValueHandler: blurEmailHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const nameInputIsInvalid = !isNameValid && isNameInputTouched;
  const nameInputClasses = nameInputIsInvalid ? "input invalid" : "input";

  const lastNameInputIsInvalid = !isLastNameValid && isLastNameInputTouched;
  const lastNameInputClasses = lastNameInputIsInvalid ? "input invalid" : "input";

  const emailInputIsInvalid = !isEmailValid && isEmailInputTouched;
  const emailInputClasses = emailInputIsInvalid ? "input invalid" : "input";

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isNameValid || !isLastNameValid || !isEmailValid) return;

    resetName();
    resetLastName();
    resetEmail();
  };

  const isFormValid = isNameValid && isLastNameValid && isEmailValid;

  return (
    <form onSubmit={submitHandler} className="simple-input">
      <div className="group-control">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            className={nameInputClasses}
            onChange={changeNameHandler}
            onBlur={blurNameHandler}
            id="name"
            type="text"
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last Name</label>
          <input
            className={lastNameInputClasses}
            onChange={changeLastNameHandler}
            onBlur={blurLastNameHandler}
            id="last-name"
            type="text"
            value={enteredLastName}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
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
        {emailInputIsInvalid && (
          <p className="error-text">Entered email is not valid.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
