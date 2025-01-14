import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

function BookAppointmentQ2() {
  const [country, setCountry] = useState('');
  const [location, setLocation] = useState('');
  const [locationVisible, setLocationVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/get-appointment')
      .then(response => {
        console.log('Fetched appointment data:', response.data);
        if (response.data.country) {
          setCountry(response.data.country);
          setLocationVisible(!!response.data.country);
        }
        if (response.data.location) {
          setLocation(response.data.location);
        }
      })
      .catch(error => console.error('Error fetching appointment data:', error));
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    setLocationVisible(!!selectedCountry);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleContinue = () => {
    console.log('Saving country and location:', country, location);
    axios.post('/api/save-appointment', { country, location })
      .then(response => {
        console.log('Save response:', response);
        navigate('/book-appointment-q3');
      })
      .catch(error => console.error('Error saving appointment data:', error));
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <p className="govuk-hint" style={{ fontSize: '24px', marginBottom: '0' }}>Book an appointment</p>
        <h1>Where are you applying from?</h1>
        <p className="govuk-hint">We will locate the closest application centres to you. Wait times for the service you requested are approximate.</p>

        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="country">Country</label>
          <select className="govuk-select govuk-!-width-full" id="country" name="country" value={country} onChange={handleCountryChange}>
            <option value="">Please select a country</option>
            <option value="australia">Australia</option>
            <option value="france">France</option>
            <option value="india">India</option>
            <option value="united-states">United States</option>
            <option value="united-kingdom">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {locationVisible && (
          <div className="govuk-form-group govuk-inset-text" id="location-container">
            <label className="govuk-label" htmlFor="location">Select Location</label>
            <select className="govuk-select govuk-!-width-full" id="location" name="location" value={location} onChange={handleLocationChange}>
              <option value="">Please select a location</option>
              <option value="location1">Ahmedabad (2 days)</option>
              <option value="location2">Bengaluru (3 days)</option>
              <option value="location3">Chandigarh (2 days)</option>
              <option value="location4">Chennai (1 day)</option>
              <option value="location5">Hyderabad (2 days)</option>
              <option value="location6">Jalandhar (4 days)</option>
              <option value="location7">Kolkata (2 days)</option>
              <option value="location8">Ludhiana (2 days)</option>
              <option value="location9">Mumbai (5 days)</option>
              <option value="location10">New Delhi (today)</option>
              <option value="location11">Pune (3 days)</option>
              <option value="location12">Jaipur (2 days)</option>
              <option value="location13">Lucknow (6 days)</option>
              <option value="location14">Goa (2 days) (July to October Only)</option>
              <option value="location15">Patna (10 days) (Mobile Collection Clinic)</option>
            </select>
          </div>
        )}

        <div className="govuk-button-group">
          <Link to="/book-appointment" className="govuk-button govuk-button--secondary">Back</Link>
          <button onClick={handleContinue} className="govuk-button">Continue</button>
        </div>
      </main>
    </div>
  );
}

export default BookAppointmentQ2;
