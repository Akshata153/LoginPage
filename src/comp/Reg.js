// components/LoginForm.js
import React, { useState } from 'react';
import Input from './Input';


function LoginForm({ mode }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
  });

  const [errors, setErrors] = useState({});
  const [validUsers, setValidUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    } else if (formData.name.length < 4) {
      errors.name = 'Name must be at least 4 characters long';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 7) {
      errors.password = 'Password must be at least 7 characters long';
    }
    if (!formData.retypePassword) {
      errors.retypePassword = 'Please retype password';
    } else if (formData.password !== formData.retypePassword) {
      errors.retypePassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      setValidUsers([...validUsers, newUser]);
      // Reset form data
      setFormData({
        name: '',
        email: '',
        password: '',
        retypePassword: '',
      });
      setErrors({});
      
      
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <div className="form-block__input-wrapper">
        {mode === 'login' ? (
          <form>
          <div className="form-group form-group--login">
            <Input type="text" id="username" label="user name" /><br/><br/>
            <Input type="password" id="password" label="password" /><br/><br/>
          </div>
          <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
          <div className="form-group form-group--signup">
          
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        /><br/>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
      <br/>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
      <br/>
        <input
          type="password"
          id="retypePassword"
          name="retypePassword"
          value={formData.retypePassword}
          onChange={handleChange}
          placeholder='Retype password'
        />
        {errors.retypePassword && (
          <p className="error">{errors.retypePassword}</p>
        )}
          </div>
          <button type="submit">Register</button>
          </form>
        )}
      </div>
      
    </>
  );
}

export default LoginForm;
