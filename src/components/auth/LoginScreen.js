import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form>

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

        <button
          className="btn btn-primary btn-block"
          type="submit"
        >
          Login
        </button>

        <hr/>

        <div className="auth__social-networks">

          <p>Login with social network</p>

          <div
            className="google-btn"
          >

            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>

          </div>

          <Link
            className="link mt-5"
            to="/auth/register">
            Create a new account
          </Link>


        </div>
      </form>
    </>
  )
}
