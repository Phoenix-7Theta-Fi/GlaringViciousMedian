import React, { useState } from 'react';

const DoctorSignup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [license, setLicense] = useState('');

  const handleSubmit = () => {
    // Handle sign-up logic
  };

  return (
    <div>
      <h2>Doctor Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="Specialization"
        />
        <input
          type="text"
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          placeholder="License Number"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default DoctorSignup;
