import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>

        <input
          placeholder="Name"
          type="text"
          name="name"
          autoComplete="off"
          className="auth__input"
        />

        <input
          placeholder="Email"
          type="text"
          name="email"
          autoComplete="off"
          className="auth__input"
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          className="auth__input"
        />

        <input
          placeholder="Confirm password"
          type="password"
          name="password2"
          className="auth__input"
        />

        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
        >
          Register
        </button>

        <Link
          className="link"
          to="/auth/login">
            Already registered?
        </Link>
      </form>
    </>

  )
}
