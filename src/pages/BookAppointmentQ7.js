import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

function BookAppointmentQ7() {
  const [notes, setNotes] = useState('');
  const [remainingChars, setRemainingChars] = useState(500);
  const navigate = useNavigate();

  const handleNotesChange = (event) => {
    const value = event.target.value;
    setNotes(value);
    setRemainingChars(500 - value.length);
  };

  const handleContinue = () => {
    axios.post('/api/save-appointment', { additionalNotes: notes })
      .then(response => {
        console.log('Save response:', response);
        navigate('/book-appointment-summary');
      })
      .catch(error => console.error('Error saving appointment data:', error));
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <p className="govuk-hint" style={{ fontSize: '24px', marginBottom: '0' }}>Book an appointment</p>
        <h1>Any additional requests?</h1>
        <p className="govuk-hint">Use this section to provide any specific notes or requirements for your appointment. You can include details such as special accommodations, preferred assistance, or other relevant information. Please keep your input to a maximum of 500 characters.</p>
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="additional-notes">Additional Notes</label>
          <textarea className="govuk-textarea" id="additional-notes" name="additional-notes" rows="5" maxLength="500" value={notes} onChange={handleNotesChange}></textarea>
          <div id="character-counter" className="character-counter">{remainingChars} characters remaining</div>
        </div>
        <div className="govuk-button-group">
          <Link to="/book-appointment-q6" className="govuk-button govuk-button--secondary">Back</Link>
          <button onClick={handleContinue} className="govuk-button">Continue</button>
        </div>
      </main>
    </div>
  );
}

export default BookAppointmentQ7;
