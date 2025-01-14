import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

function BookAppointmentQ5() {
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [interpreterNeeded, setInterpreterNeeded] = useState('');
  const [interpreterLanguage, setInterpreterLanguage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/get-appointment')
      .then(response => {
        console.log('Fetched appointment data:', response.data);
        if (response.data.preferredLanguage) {
          setPreferredLanguage(response.data.preferredLanguage);
        }
        if (response.data.interpreterNeeded) {
          setInterpreterNeeded(response.data.interpreterNeeded);
        }
        if (response.data.interpreterLanguage) {
          setInterpreterLanguage(response.data.interpreterLanguage);
        }
      })
      .catch(error => console.error('Error fetching appointment data:', error));
  }, []);

  const handlePreferredLanguageChange = (event) => {
    setPreferredLanguage(event.target.value);
  };

  const handleInterpreterNeededChange = (event) => {
    setInterpreterNeeded(event.target.value);
  };

  const handleInterpreterLanguageChange = (event) => {
    setInterpreterLanguage(event.target.value);
  };

  const handleContinue = () => {
    axios.post('/api/save-appointment', { preferredLanguage, interpreterNeeded, interpreterLanguage })
      .then(response => {
        console.log('Save response:', response);
        navigate('/book-appointment-q6');
      })
      .catch(error => console.error('Error saving appointment data:', error));
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <h1>Select your preferred language</h1>
        <p className="govuk-hint">Please select your preferred language for your appointment. This will help us ensure that a staff member with the appropriate language skills is available to assist you.</p>
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="preferred-language">Preferred language</label>
          <select className="govuk-select govuk-!-width-full" id="preferred-language" name="preferred-language" value={preferredLanguage} onChange={handlePreferredLanguageChange}>
            <option value="">Please select a language</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="hindi">Hindi</option>
            <option value="urdu">Urdu</option>
            <option value="bengali">Bengali</option>
            <option value="tamil">Tamil</option>
            <option value="telugu">Telugu</option>
            <option value="punjabi">Punjabi</option>
            <option value="mandarin">Mandarin</option>
            <option value="arabic">Arabic</option>
          </select>
        </div>
    
        <h2>Do you need an interpreter?</h2>
        <p className="govuk-hint">If you or any of your group members require an interpreter for your appointment, please let us know. This includes spoken languages and sign language. We will do our best to accommodate your needs with an interpreter fluent in the selected language.</p>
        <div className="govuk-form-group">   
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              Request interpreter?
            </legend>
            <div className="govuk-radios govuk-radios--inline">
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="interpreter-yes" name="interpreter-needed" type="radio" value="yes" onChange={handleInterpreterNeededChange} />
                <label className="govuk-label govuk-radios__label" htmlFor="interpreter-yes">Yes</label>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="interpreter-no" name="interpreter-needed" type="radio" value="no" onChange={handleInterpreterNeededChange} />
                <label className="govuk-label govuk-radios__label" htmlFor="interpreter-no">No</label>
              </div>
            </div>
          </fieldset>
        </div>
    
        {interpreterNeeded === 'yes' && (
          <div className="govuk-form-group govuk-inset-text" id="interpreter-language-section">
            <label className="govuk-label" htmlFor="interpreter-language">Select interpreter language</label>
            <select className="govuk-select govuk-!-width-full" id="interpreter-language" name="interpreter-language" value={interpreterLanguage} onChange={handleInterpreterLanguageChange}>
              <option value="">Select a language</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="urdu">Urdu</option>
              <option value="bengali">Bengali</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
              <option value="punjabi">Punjabi</option>
              <option value="mandarin">Mandarin</option>
              <option value="french">French</option>
              <option value="arabic">Arabic</option>
              <option value="asl">American Sign Language (ASL)</option>
              <option value="isln">Indian Sign Language (ISL)</option>
            </select>
          </div>
        )}
    
        <div className="govuk-button-group">
          <Link to="/book-appointment-q4" className="govuk-button govuk-button--secondary">Back</Link>
          <button className="govuk-button" onClick={handleContinue}>Continue</button>
        </div>
      </main>
    </div>
  );
}

export default BookAppointmentQ5;
