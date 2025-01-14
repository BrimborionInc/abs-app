import React from 'react';
import Header from '../components/Header'; // Custom header component
import Footer from '../components/Footer'; // Custom footer component
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>

      <main className="govuk-main-wrapper" id="main-content" role="main">
        <div className="govuk-width-container">
          <h1 className="govuk-heading-l">Book your appointment</h1>
          <p className="govuk-body">
            Important: New <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/identity-management/biometrics/procedures.html" className="govuk-link" target="_blank" rel="noopener noreferrer">biometric appointment</a> slots are added periodically throughout the day. These appointments are free and available online for individual applicants and authorized representatives.
          </p>
          <p className="govuk-body">
            Booking an appointment with [insert supplier name] for biometric enrollment is free. Be cautious of anyone charging for this service.
          </p>
          <p className="govuk-body">
            Ensure you book your appointment using the same name and date of birth as shown on your passport or travel document. The VACs will turn away clients if the details do not match.
          </p>
          <p className="govuk-body">
            Emergency appointments are only available for specific cases such as the death or critical illness of an immediate family member residing in Canada. Proof must be provided during the appointment.
          </p>
          <p className="govuk-body">
            To find out if you need to give biometrics, please visit <a href="http://www.cic.gc.ca/english/visit/biometrics.asp" className="govuk-link" target="_blank" rel="noopener noreferrer">IRCC's Biometrics Information</a>. Appointments for Biometric Collection may only be booked if you have received a letter instructing you to give biometrics. You will need the code from this letter when you book your appointment.
          </p>

          {/* Start button */}
          <div className="govuk-button-group">
            <Link to="/login" className="govuk-button govuk-button--start" role="button">Start now &gt;</Link>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Welcome;
