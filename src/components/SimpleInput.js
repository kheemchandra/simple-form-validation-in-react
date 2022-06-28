import useInput from "../hooks/use-Input";

const SimpleInput = () => {
  const {
    value: enteredName,
    hasError: nameHasError,
    isValid: isNameValid,
    changeValueHandler: changeNameHandler,
    blurValueHandler: blurNameHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    isValid: isLastNameValid,
    changeValueHandler: changeLastNameHandler,
    blurValueHandler: blurLastNameHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: isEmailValid,
    changeValueHandler: changeEmailHandler,
    blurValueHandler: blurEmailHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const isFormValid = isNameValid && isLastNameValid && isEmailValid;

  const nameInputClasses = nameHasError ? "input invalid" : "input";

  const lastNameInputClasses = lastNameHasError ? "input invalid" : "input";

  const emailInputClasses = emailHasError ? "input invalid" : "input";

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) return;

    console.log('Submitted...');
    console.log(enteredName, enteredLastName, enteredEmail);

    resetName();
    resetLastName();
    resetEmail();
  };

  

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
          {nameHasError && (
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
          {lastNameHasError && (
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
        {emailHasError && (
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
