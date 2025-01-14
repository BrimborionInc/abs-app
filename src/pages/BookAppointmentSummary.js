import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

const locationMapping = {
  location1: 'Ahmedabad',
  location2: 'Bengaluru',
  location3: 'Chandigarh',
  location4: 'Chennai',
  location5: 'Hyderabad',
  location6: 'Jalandhar',
  location7: 'Kolkata',
  location8: 'Ludhiana',
  location9: 'Mumbai',
  location10: 'New Delhi',
  location11: 'Pune',
  location12: 'Jaipur',
  location13: 'Lucknow',
  location14: 'Goa (July to October Only)',
  location15: 'Patna (Mobile Collection Clinic)',
  // ...add other locations as needed
};

function BookAppointmentSummary() {
  const [appointmentData, setAppointmentData] = useState({});

  useEffect(() => {
    axios.get('/api/get-appointment')
      .then(response => setAppointmentData(response.data))
      .catch(error => console.error('Error fetching appointment data:', error));
  }, []);

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <p className="govuk-hint" style={{ fontSize: '24px', marginBottom: '0' }}>Book an appointment</p>
        <h1>Review your appointment details</h1>
        <p className="govuk-hint">Please review the details of your appointment below. If you need to make any changes, you can go back to the relevant section.</p>
        
        <div className="govuk-summary-list">
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Service Type</dt>
            <dd className="govuk-summary-list__value">{appointmentData.serviceType}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Country</dt>
            <dd className="govuk-summary-list__value">{appointmentData.country}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q2" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Location</dt>
            <dd className="govuk-summary-list__value">{locationMapping[appointmentData.location]}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q2" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Group Members</dt>
            <dd className="govuk-summary-list__value">
              {appointmentData.members && appointmentData.members.map((member, index) => (
                <div key={index}>
                  {member.name} ({member.relationship}) - BIL: {member.bilReference || 'N/A'}
                </div>
              ))}
            </dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q3" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Extra Time</dt>
            <dd className="govuk-summary-list__value">{appointmentData.extraTime}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q4" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Preferred Language</dt>
            <dd className="govuk-summary-list__value">{appointmentData.preferredLanguage}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q5" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Interpreter Needed</dt>
            <dd className="govuk-summary-list__value">{appointmentData.interpreterNeeded}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q5" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Interpreter Language</dt>
            <dd className="govuk-summary-list__value">{appointmentData.interpreterLanguage}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q5" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Additional Services</dt>
            <dd className="govuk-summary-list__value">
              {appointmentData.additionalServices && appointmentData.additionalServices.join(', ')}
            </dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q6" className="govuk-link">Change</Link>
            </dd>
          </div>
          <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">Additional Notes</dt>
            <dd className="govuk-summary-list__value">{appointmentData.additionalNotes}</dd>
            <dd className="govuk-summary-list__actions">
              <Link to="/book-appointment-q7" className="govuk-link">Change</Link>
            </dd>
          </div>
        </div>

        <div className="govuk-button-group">
          <Link to="/book-appointment-q7" className="govuk-button govuk-button--secondary">Back</Link>
          <button className="govuk-button">Confirm and Book</button>
        </div>
      </main>
    </div>
  );
}

export default BookAppointmentSummary;
