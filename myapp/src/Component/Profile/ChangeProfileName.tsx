import React, { useState } from 'react';

const ChangeProfileName: React.FC = () => {
  const [newName, setNewName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Profile Name:', newName);
    // Add logic to update profile name
    setNewName('');
  };

  return (
    <div className="form-container-profile">
      <div className="form-profile">
        <h2>Change Profile Name</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="New Name" value={newName} onChange={handleChange} />
          <button type="submit">Change Name</button>
        </form>
      </div>
    </div>
  );
};

export default ChangeProfileName;
