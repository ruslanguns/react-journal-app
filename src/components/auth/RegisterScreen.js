import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { loading, msgError } = useSelector(state => state.ui);
  
  const [formValues, handleInputChange] = useForm({
    name: 'Ruslan Gonzalez',
    email: 'ruslanguns+test1@gmail.com',
    password: '123123',
    password2: '123123'
  });
  const { name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch( startRegisterWithEmailPasswordName(email, password, name));
    }

  }

  const isFormValid = () => {

    if ( name.trim().length === 0) {
      dispatch( setError('Name is required') );
      return false;
    }

    if (!validator.isEmail(email)) {
      dispatch( setError('Email is not valid') );
      return false;
    }

    if (password !== password2 || password.length < 5 ) {
      dispatch( setError('Password should be at least 6 characters and match each other') );
      return false;
    }

    dispatch(removeError());

    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleSubmit}>

        {
          msgError
          && 
          <div className="auth__alert-error">
            { msgError }
          </div>
        }

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
          className="auth__input"
        />


        <button
          type="submit"
          disabled={ loading }
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>



        <Link
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>

      </form>
    </>
  )
}
