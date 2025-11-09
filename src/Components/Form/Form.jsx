import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = ({
  initialValues = {},
  onChange,
  onSubmit,
  submitLabel = "Submit",
  showPassword = false,
  disabled = false,
}) => {
  const [values, setValues] = useState({
    name: initialValues.name || "",
    email: initialValues.email || "",
    photoURL: initialValues.photoURL || "",
    password: initialValues.password || "",
  });

  useEffect(() => {
    setValues({
      name: initialValues.name || "",
      email: initialValues.email || "",
      photoURL: initialValues.photoURL || "",
      password: initialValues.password || "",
    });
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (onChange) onChange(name, value, next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(values);
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <span className="input-span">
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" value={values.name} onChange={handleChange} />
        </span>

        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} />
        </span>

        <span className="input-span">
          <label htmlFor="photoURL" className="label">Photo URL</label>
          <input id="photoURL" name="photoURL" type="text" value={values.photoURL} onChange={handleChange} />
        </span>

        {showPassword && (
          <span className="input-span">
            <label htmlFor="password" className="label">Password</label>
            <input id="password" name="password" type="password" value={values.password} onChange={handleChange} />
          </span>
        )}

        <input className="submit" type="submit" value={submitLabel} disabled={disabled} />
      </form>
    </StyledWrapper>
  );
};

export default Form;

/* StyledWrapper same as your existing styles (copy/paste) */
const StyledWrapper = styled.div`
  .form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
  }

  .form .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form input[type="text"],
  .form input[type="email"],
  .form input[type="password"] {
    border-radius: 0.5rem;
    padding: 1rem 0.75rem;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
  }

  .form input[type="text"]:focus,
  .form input[type="email"]:focus,
  .form input[type="password"]:focus {
    outline: 2px solid var(--clr);
  }

  .label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
  }

  .form .submit {
    padding: 1rem 0.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .form .submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
  }

  .span {
    text-decoration: none;
    color: var(--bg-dark);
  }

  .span a {
    color: var(--clr);
  }
`;