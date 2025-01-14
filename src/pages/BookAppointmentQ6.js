import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

function BookAppointmentQ6() {
  const [additionalServices, setAdditionalServices] = useState([]);
  const navigate = useNavigate();

  const handleServiceChange = (event) => {
    const { name, checked } = event.target;
    setAdditionalServices(prevServices =>
      checked ? [...prevServices, name] : prevServices.filter(service => service !== name)
    );
  };

  const handleContinue = () => {
    axios.post('/api/save-appointment', { additionalServices })
      .then(response => {
        console.log('Save response:', response);
        navigate('/book-appointment-q7');
      })
      .catch(error => console.error('Error saving appointment data:', error));
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <p className="govuk-hint" style={{ fontSize: '24px', marginBottom: '0' }}>Book an appointment</p>
        <h1>Would you like any additional services?</h1>
        <p className="govuk-hint"><b>Value-Added Services are optional and not included in any Assisted Application Service or Biometric Collection Service fees, and that the purchase of Value-Added Services will not result in faster processing times or a favorable decision on their immigration application.</b></p>
        <p className="govuk-hint">Please select any optional services you would like to add to your appointment. Availability may be limited based on your location. Prices are shown in the local currency. You have the option to pay online now, or when you attend the appointment.</p>
        <div className="govuk-form-group">
          <div className="govuk-checkboxes govuk-checkboxes--small">
            <div className="govuk-checkboxes__item tooltip">
              <input className="govuk-checkboxes__input" id="service-premium-lounge" name="Premium Lounge" type="checkbox" onChange={handleServiceChange} />
              <label className="govuk-label govuk-checkboxes__label" htmlFor="service-premium-lounge">Premium Lounge (₹ XX)</label>
              <span className="tooltiptext">Access to a comfortable lounge with private amenities during your appointment. Please see our website for details and photos of the lounge and its available services https://thesupplier.url/lounge</span>
            </div>
            <div className="govuk-checkboxes__item tooltip">
              <input className="govuk-checkboxes__input" id="service-hospitality" name="Hospitality Services" type="checkbox" onChange={handleServiceChange} />
              <label className="govuk-label govuk-checkboxes__label" htmlFor="service-hospitality">Hospitality Services (₹ XX)</label>
              <span className="tooltiptext">Enjoy refreshments or light meals during your appointment. See the VAC website for details as to what options and amenities are available at the application centre.</span>
            </div>
            <div className="govuk-checkboxes__item tooltip">
              <input className="govuk-checkboxes__input" id="service-printing" name="Printing and Photocopying" type="checkbox" onChange={handleServiceChange} />
              <label className="govuk-label govuk-checkboxes__label" htmlFor="service-printing">Printing and Photocopying (₹ XX)</label>
              <span className="tooltiptext">Printing and photocopying services for your application documents. We will ask how many pages you need to scan to make sure we book an appointment with enough time.</span>
            </div>
          </div>
        </div>
        <div className="govuk-button-group">
          <Link to="/book-appointment-q5" className="govuk-button govuk-button--secondary">Back</Link>
          <button onClick={handleContinue} className="govuk-button">Continue</button>
        </div>
      </main>
    </div>
  );
}

export default BookAppointmentQ6;
