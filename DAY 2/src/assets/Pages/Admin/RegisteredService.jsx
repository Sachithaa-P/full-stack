import React, { useState } from 'react';
import AdminSideBar from "./AdminSideBar";

function AddService() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    serviceName: '',
    serviceDescription: '',
    servicePrice: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending the data to a server
    // For now, let's just log the data
    console.log(formData);
    // Optionally, you can clear the form after submission
    setFormData({
      serviceName: '',
      serviceDescription: '',
      servicePrice: ''
    });
  };

  return (
    <div style={{ border: '2px solid black', borderRadius: '10px', padding: '20px', width: '400px', margin: '0 auto', backgroundColor: 'rgba(255, 229, 197, 0.8)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center', color: 'black' }}>Add Service</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="serviceName" style={{ marginBottom: '5px' }}>Service Name:</label>
          <input 
            type="text" 
            id="serviceName"
            name="serviceName" 
            value={formData.serviceName} 
            onChange={handleChange} 
            required
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="serviceDescription" style={{ marginBottom: '5px' }}>Service Description:</label>
          <textarea 
            id="serviceDescription"
            name="serviceDescription" 
            value={formData.serviceDescription} 
            onChange={handleChange} 
            required
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', minHeight: '100px' }} 
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="servicePrice" style={{ marginBottom: '5px' }}>Service Price:</label>
          <input 
            type="number" 
            id="servicePrice"
            name="servicePrice" 
            value={formData.servicePrice} 
            onChange={handleChange} 
            required
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} 
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            background: 'black', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            alignSelf: 'flex-end',
            transition: 'background-color 0.3s',
            }}>
          Add Service
        </button>
      </form>
    </div>
  );
}

export default function RegisteredService() {
  return (
    <>
      <div style={{ padding: '90px', display: 'flex', justifyContent: 'center' }}>
        <header>
          <AdminSideBar/>
        </header>
        
        <div>
          {/* AddService component added here */}
          <AddService />
        </div>
        
      </div>
    </>
  );
}
