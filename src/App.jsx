// App.jsx
import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (value) => {
    setPassword(value);
    const hasLetters = /[a-zA-Z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (value.length < 6) {
      setStrength('Too short');
    } else if (hasLetters && hasNumbers && value.length >= 6 && !hasSpecialChars) {
      setStrength('Weak');
    } else if (hasLetters && hasNumbers && hasSpecialChars && value.length >= 8) {
      setStrength('Strong');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Password Strength Checker</h2>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">Enter Password:</label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          value={password}
          onChange={(e) => checkStrength(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
};

export default App;