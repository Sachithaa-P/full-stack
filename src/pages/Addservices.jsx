import React, { useState } from 'react';

function Addservice({ onAddService }) {
  const [service, setService] = useState({
    name: '',
  
    description: '',
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prevService => ({
      ...prevService,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are provided
    if (!service.name || !service.topic || !service.description || !service.price) {
      alert('Please fill in all fields');
      return;
    }
    // Call the onAddService function passed from the parent component
    onAddService(service);
    // Reset form fields after submission
    setService({
      name: '',
      
      description: '',
     
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Service Name:
          <input 
            type="text" 
            name="name"
            value={service.name} 
            onChange={handleChange} 
            required 
          />
        </label>
      </div>
      
      <div>
        <label>
          Description:
          <textarea 
            name="description"
            value={service.description} 
            onChange={handleChange} 
            required 
          />
        </label>
      </div>
     
      <button type="submit">Add Service</button>
    </form>
  );
}

export default Addservice;
