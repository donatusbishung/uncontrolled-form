import React, { useState, useRef } from "react";

function UncontrolledForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleValidation = (inputRef, setError) => {
    if (!inputRef.current.value) {
      inputRef.current.style.border = "1px solid red";
      setError(true);
    } else {
      inputRef.current.style.border = "1px solid #c4c0c0";
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    handleValidation(firstNameRef, setFirstNameError);
    handleValidation(lastNameRef, setLastNameError);
    handleValidation(emailRef, setEmailError);
    handleValidation(phoneRef, setPhoneError);

    if (!firstName || !lastName || !email || !phone) {
      return;
    } else {
      console.log(
        "Form Submitted successfully",
        firstName,
        lastName,
        email,
        phone
      );
      alert("Form Submitted successfully");
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">First Name </label>
          <input
            type="text"
            name="First name"
            ref={firstNameRef}
            onInput={() => handleValidation(firstNameRef, setFirstNameError)}
          />
          {firstNameError && (
            <span className="error-text">First name is required</span>
          )}
        </div>
        <div>
          <label htmlFor="">Last Name </label>
          <input
            type="text"
            name="Last name"
            ref={lastNameRef}
            onInput={() => handleValidation(lastNameRef, setLastNameError)}
          />
          {lastNameError && (
            <span className="error-text">Last name is required</span>
          )}
        </div>
        <div>
          <label htmlFor="">Email </label>
          <input
            type="email"
            name="Email"
            ref={emailRef}
            onInput={() => handleValidation(emailRef, setEmailError)}
          />
          {emailError && <span className="error-text">Email is required</span>}
        </div>
        <div>
          <label htmlFor="">Phone </label>
          <input
            type="number"
            name="Last name"
            ref={phoneRef}
            onInput={() => handleValidation(phoneRef, setPhoneError)}
          />
          {phoneError && <span className="error-text">Phone is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
