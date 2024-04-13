// components/LoginComponent.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

function LoginComponent() {
  const [mode, setMode] = useState('login');

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="container">
      <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}>
        <section className={`form-block form-block--is-${mode}`}>
          <header className="form-block__header">
            <h1 style={{fontWeight: 'bold'}}>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
            <div className="form-block__toggle-block">
              <span style={{  fontSize: '19px'}}>{mode === 'login' ? "Don't" : 'Already'} have an account? Click here &#8594;  </span>
              <input id="form-toggler" type="checkbox" onClick={toggleMode} />
              <label htmlFor="form-toggler"></label>
            </div>
          </header>
          <LoginForm mode={mode} />
        </section>
      </div>
    </div>
  );
}

export default LoginComponent;
