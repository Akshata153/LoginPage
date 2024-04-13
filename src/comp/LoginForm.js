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
  const initialFormData = {
    username: '',
    password: '',
    name: '',
    email: '',
    retypePassword: '',
  };

  const [errors, setErrors] = useState({});
  const [validUsers, setValidUsers] = useState([
    {
      name:'Akshata',
      email:'a@gmail.com',
      password:'1234'
      
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === 'login') {
      const { username, password } = formData;
      const foundUser = validUsers.find(user => user.name === username && user.password === password);
      if (foundUser) {
        alert('Login successful!');
      } else {
        alert('Login failed. Please check your credentials.');
      }
      return;
    }




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

  React.useEffect(() => {
    setFormData(initialFormData);
    setErrors({});
  }, [mode]);


  return (
    <>
      <div className="form-block__input-wrapper">
        {mode === 'login' ? (
          <form onSubmit={handleSubmit}>
          <div className="form-group form-group--login">
            <input
              type="text"
              id="username"
              name="username" // Change name attribute to match formData
              value={formData.username} // Use formData.username instead of formData.name
              onChange={handleChange} // Update to handleChange function
              placeholder='Username' // Update placeholder
            /><br/><br/>
            <input
              type="password"
              id="password"
              name="password" // Change name attribute to match formData
              value={formData.password} // Use formData.password instead of formData.retypePassword
              onChange={handleChange} // Update to handleChange function
              placeholder='Password' // Update placeholder
            /><br/><br/>
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
