import React, { useState } from 'react';

export default function Add() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    // Add your logic here
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}