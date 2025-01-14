import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

function BookAppointmentQ4() {
  const [extraTime, setExtraTime] = useState('');
  const navigate = useNavigate();

  const handleExtraTimeChange = (event) => {
    setExtraTime(event.target.value);
  };

  const handleContinue = () => {
    axios.post('/api/save-appointment', { extraTime })
      .then(response => {
        console.log('Save response:', response);
        navigate('/book-appointment-q5');
      })
      .catch(error => console.error('Error saving appointment data:', error));
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <p className="govuk-hint" style={{ fontSize: '24px', marginBottom: '0' }}>Book an appointment</p>
        <h1>Request extra time?</h1>
        <p className="govuk-hint">If you or any of your group members usually need extra time to complete tasks during the appointment, please let us know, and we will accommodate you with a longer appointment slot. There is no additional charge but availability may be limited.</p>
         
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
              <h2 className="govuk-fieldset__heading">Request extra time?</h2>
            </legend>
            <div className="govuk-radios govuk-radios--inline">
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="extra-time-yes" name="extra-time" type="radio" value="yes" onChange={handleExtraTimeChange} />
                <label className="govuk-label govuk-radios__label" htmlFor="extra-time-yes">Yes</label>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="extra-time-no" name="extra-time" type="radio" value="no" onChange={handleExtraTimeChange} />
                <label className="govuk-label govuk-radios__label" htmlFor="extra-time-no">No</label>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="govuk-button-group">
          <Link to="/book-appointment-q3" className="govuk-button govuk-button--secondary">Back</Link>
          <button onClick={handleContinue} className="govuk-button">Continue</button>
        </div>
      </main>
    </div>
  );
}

export default BookAppointmentQ4;
