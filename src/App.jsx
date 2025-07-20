import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (value) => {
    setPassword(value);

    const hasLetters = /[a-zA-Z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (value.length < 6) {
      setStrength('Weak');
    } else if (hasLetters && hasNumbers && value.length >= 6 && !hasSymbols) {
      setStrength('Medium');
    } else if (hasLetters && hasNumbers && hasSymbols && value.length >= 8) {
      setStrength('Strong');
    } else {
      setStrength('Weak');
    }
  };

  const getColor = () => {
    switch (strength) {
      case 'Weak': return 'danger';
      case 'Medium': return 'warning';
      case 'Strong': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🔒 Password Strength Checker</h2>

      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">Enter Password:</label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Type your password"
          value={password}
          onChange={(e) => checkStrength(e.target.value)}
        />
      </div>

      {password && (
        <div className="mt-3">
          <div className={`alert alert-${getColor()}`}>
            <strong>Password Strength:</strong> {strength}
          </div>

          <div className="card p-3">
            <h6>🔧 Tips for Stronger Passwords:</h6>
            <ul>
              <li>Use at least 8 characters</li>
              <li>Mix uppercase and lowercase letters</li>
              <li>Include numbers (0–9)</li>
              <li>Add special symbols (e.g. !, @, #, $)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
