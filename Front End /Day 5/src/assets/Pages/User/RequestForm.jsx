// RequestForm.jsx
import  { useState } from 'react';
import '../../Css/RequestForm.css';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    homeCareServices: [],
    nursingCareServices: [],
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? (checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value))
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="request-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Home Care Services:
          <div className="services-list">
            <label>
              <input
                type="checkbox"
                name="homeCareServices"
                value="mealPreparation"
                checked={formData.homeCareServices.includes('mealPreparation')}
                onChange={handleChange}
              />
              Meal Preparation
            </label>
            <label>
              <input
                type="checkbox"
                name="homeCareServices"
                value="medicationManagement"
                checked={formData.homeCareServices.includes('medicationManagement')}
                onChange={handleChange}
              />
              Medication Management
            </label>
            <label>
              <input
                type="checkbox"
                name="homeCareServices"
                value="companionship"
                checked={formData.homeCareServices.includes('companionship')}
                onChange={handleChange}
              />
              Companionship
            </label>
            <label>
              <input
                type="checkbox"
                name="homeCareServices"
                value="lightHousekeeping"
                checked={formData.homeCareServices.includes('lightHousekeeping')}
                onChange={handleChange}
              />
              Light Housekeeping
            </label>
          </div>
        </label>

        <label>
          Nursing Care Services:
          <div className="services-list">
            <label>
              <input
                type="checkbox"
                name="nursingCareServices"
                value="woundCare"
                checked={formData.nursingCareServices.includes('woundCare')}
                onChange={handleChange}
              />
              Wound Care
            </label>
            <label>
              <input
                type="checkbox"
                name="nursingCareServices"
                value="vitalSignMonitoring"
                checked={formData.nursingCareServices.includes('vitalSignMonitoring')}
                onChange={handleChange}
              />
              Vital Sign Monitoring
            </label>
            <label>
              <input
                type="checkbox"
                name="nursingCareServices"
                value="postSurgeryCare"
                checked={formData.nursingCareServices.includes('postSurgeryCare')}
                onChange={handleChange}
              />
              Post-Surgery Care
            </label>
            <label>
              <input
                type="checkbox"
                name="nursingCareServices"
                value="painManagement"
                checked={formData.nursingCareServices.includes('painManagement')}
                onChange={handleChange}
              />
              Pain Management
            </label>
          </div>
        </label>

        <label>
          Your Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestForm;
