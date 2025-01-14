import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/govuk-frontend.min.css';
import '../css/style.css';

function BookAppointment() {
  const [isBiometric, setIsBiometric] = useState(false);
  const navigate = useNavigate();

  const handleServiceChange = (event) => {
    const { value } = event.target;
    console.log('Selected service:', value); // Debugging statement
    setIsBiometric(value === 'biometric');
    console.log('isBiometric state:', value === 'biometric'); // Debugging statement
  };

  const handleContinue = () => {
    const serviceType = document.querySelector('input[name="appointment-type"]:checked').value;
    axios.post('/api/save-appointment', { serviceType })
      .then(response => {
        console.log('Save response:', response);
        navigate('/book-appointment-q2');
      })
      .catch(error => console.error('Error saving appointment data:', error));
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <p className="govuk-hint" style={{ fontSize: '24px', marginBottom: '0' }}>Book an appointment</p>
        <h1>Which service do you require?</h1>
        <div className="govuk-hint">Please select one of the following options to proceed. You will have an opportunity to add family or group members and request additional service options later in the booking process. Hover over the item for a description of the service.</div>

        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
              <h2 className="govuk-fieldset__heading">Common Services</h2>
            </legend>
            <div className="govuk-radios govuk-radios--inline">
              <div className="govuk-radios__item tooltip">
                <input className="govuk-radios__input" id="service-biometric" name="appointment-type" type="radio" value="biometric" onChange={handleServiceChange} />
                <label className="govuk-label govuk-radios__label" htmlFor="service-biometric">Biometric Collection</label>
                <span className="tooltiptext">Select only if you have received a Biometric Instruction Letter (BIL) from IRCC. Duration: 15 minutes. Bring your BIL and a government-issued photo ID.</span>
              </div>
              <div className="govuk-radios__item tooltip">
                <input className="govuk-radios__input" id="service-document-submission" name="appointment-type" type="radio" value="document-submission" onChange={handleServiceChange} />
                <label className="govuk-label govuk-radios__label" htmlFor="service-document-submission">Document Submission</label>
                <span className="tooltiptext">Submit your passport or supporting documents to IRCC. Duration: 20 minutes. Bring all documents as instructed by IRCC.</span>
              </div>
              <div className="govuk-radios__item tooltip">
                <input className="govuk-radios__input" id="service-interview" name="appointment-type" type="radio" value="interview" onChange={handleServiceChange} />
                <label className="govuk-label govuk-radios__label" htmlFor="service-interview">Application Assistance</label>
                <span className="tooltiptext">In-person or virtual assisting in completing any aspect of your application.</span>
              </div>
            </div>
          </fieldset>
        </div>

        {console.log('Rendering BIL reference section:', isBiometric)} {/* Debugging statement */}
        {isBiometric && (
          <div id="bil-reference-section" className="govuk-inset-text">
            <label className="govuk-label" htmlFor="bil-reference">BIL Reference Number (required for Biometric Collection)</label>
            <input className="govuk-input" id="bil-reference" name="bil-reference" type="text" />
          </div>
        )}

        <details className="govuk-details" data-module="govuk-details">
          <summary className="govuk-details__summary">
            <p className="govuk-details__summary-text">Other Available Services</p>
          </summary>
          <div className="govuk-inset-text">
            <div className="govuk-form-group">
              <div className="govuk-radios">
                <div className="govuk-radios__item tooltip">
                  <input className="govuk-radios__input" id="service-travel-doc-scanning" name="appointment-type" type="radio" value="travel-doc-scanning" onChange={handleServiceChange} />
                  <label className="govuk-label govuk-radios__label" htmlFor="service-travel-doc-scanning">Travel Document Scanning</label>
                  <span className="tooltiptext">Scan your travel documents for submission to IRCC. Duration: 15 minutes. Bring your travel documents and any required letters.</span>
                </div>
                <div className="govuk-radios__item tooltip">
                  <input className="govuk-radios__input" id="service-app-assistance-in-person" name="appointment-type" type="radio" value="app-assistance-in-person" onChange={handleServiceChange} />
                  <label className="govuk-label govuk-radios__label" htmlFor="service-app-assistance-in-person">Visa Affixation</label>
                  <span className="tooltiptext">Receive in-person guidance for your application process. Duration: 30 minutes. Bring your application and relevant supporting documents.</span>
                </div>
                <div className="govuk-radios__item tooltip">
                  <input className="govuk-radios__input" id="service-app-assistance-virtual" name="appointment-type" type="radio" value="app-assistance-virtual" onChange={handleServiceChange} />
                  <label className="govuk-label govuk-radios__label" htmlFor="service-app-assistance-virtual">Self-Service Workstations</label>
                  <span className="tooltiptext">Get virtual support for your application. Duration: 30 minutes. Ensure you have a stable internet connection and access to your application documents.</span>
                </div>
                <div className="govuk-radios__item tooltip">
                  <input className="govuk-radios__input" id="service-buccal-swab" name="appointment-type" type="radio" value="buccal-swab" onChange={handleServiceChange} />
                  <label className="govuk-label govuk-radios__label" htmlFor="service-buccal-swab">Virtual Co-Browsing</label>
                  <span className="tooltiptext">Provide a DNA sample for verification purposes. Duration: 10 minutes. Bring your government-issued photo ID and any related instructions.</span>
                </div>
                <div className="govuk-radios__item tooltip">
                  <input className="govuk-radios__input" id="service-self-service-workstation" name="appointment-type" type="radio" value="self-service-workstation" onChange={handleServiceChange} />
                  <label className="govuk-label govuk-radios__label" htmlFor="service-self-service-workstation">Self-Service Workstation</label>
                  <span className="tooltiptext">Use a workstation to complete your application tasks. Duration: Variable. Bring any necessary documents and digital copies.</span>
                </div>
                <div className="govuk-radios__item tooltip">
                  <input className="govuk-radios__input" id="service-photography" name="appointment-type" type="radio" value="photography" onChange={handleServiceChange} />
                  <label className="govuk-label govuk-radios__label" htmlFor="service-photography">Photography Services</label>
                  <span className="tooltiptext">Get a compliant photograph taken for your application. Duration: 10 minutes. Bring any photo requirements provided by IRCC.</span>
                </div>
              </div>
            </div>
          </div>
        </details>

        <div className="govuk-button-group">
          <button onClick={handleContinue} className="govuk-button">Continue</button>
          <Link to="/my-appointments" className="govuk-link govuk-link--no-visited-state govuk-button--secondary">Cancel</Link>
        </div>
      </main>
    </div>
  );
}

export default BookAppointment;
