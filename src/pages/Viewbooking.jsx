import React, { useState, useEffect } from 'react';
// import { getBookedServices } from './api'; // Assuming you have an API function to fetch booked services

function Viewbooking() {
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    // Fetch booked services from API when component mounts
    async function fetchBookedServices() {
      try {
        const data = await getBookedServices();
        setBookedServices(data);
      } catch (error) {
        console.error('Error fetching booked services:', error);
      }
    }
    fetchBookedServices();
  }, []);

  // Remove duplicate customer names for each service type
  const removeDuplicates = (services) => {
    const uniqueNames = [];
    return services.filter(service => {
      if (!uniqueNames.includes(service.customerName)) {
        uniqueNames.push(service.customerName);
        return true;
      }
      return false;
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Booked Services</h1>
      <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ textDecoration: 'underline' }}>Cooking</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {removeDuplicates(bookedServices.filter(service => service.topic === 'cooking')).map(service => (
            <li key={service.id} style={{ marginBottom: '10px', background: '#FFC0CB', padding: '5px' }}>
              {/* Display service details */}
              <strong>{service.name}</strong> - Booked by: {service.customerName}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ textDecoration: 'underline' }}>Cleaning</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {removeDuplicates(bookedServices.filter(service => service.topic === 'cleaning')).map(service => (
            <li key={service.id} style={{ marginBottom: '10px', background: '#FFC0CB', padding: '5px' }}>
              {/* Display service details */}
              <strong>{service.name}</strong> - Booked by: {service.customerName}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ textDecoration: 'underline' }}>Transportation</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {removeDuplicates(bookedServices.filter(service => service.topic === 'transportation')).map(service => (
            <li key={service.id} style={{ marginBottom: '10px', background: '#FFC0CB', padding: '5px' }}>
              {/* Display service details */}
              <strong>{service.name}</strong> - Booked by: {service.customerName}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
        <h2 style={{ textDecoration: 'underline' }}>Mobility Assistance</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {removeDuplicates(bookedServices.filter(service => service.topic === 'mobility assistance')).map(service => (
            <li key={service.id} style={{ marginBottom: '10px', background: '#FFC0CB', padding: '5px' }}>
              {/* Display service details */}
              <strong>{service.name}</strong> - Booked by: {service.customerName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Viewbooking;
