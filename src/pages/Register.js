import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Register() {
  return (
    <div>

      <main className="govuk-main-wrapper" id="main-content" role="main">
        <div className="govuk-width-container">
          <h1 className="govuk-heading">Create your account</h1>

          <p className="govuk-hint">
            To book an appointment, you must create an account. Please provide the required information, including your contact details and password.
            If booking for <span className="hover-info" data-hover="You may add family or group members during the booking process after registering.">family or group members</span>,
            you can add them after registration.
          </p>

          {/* Registration Form Section */}
          <section className="govuk-section">
            <div className="govuk-form-group">
              <label htmlFor="first-name" className="govuk-label">First Name</label>
              <input type="text" className="govuk-input" id="first-name" required />
            </div>

            <div className="govuk-form-group">
              <label htmlFor="last-name" className="govuk-label">Last Name</label>
              <input type="text" className="govuk-input" id="last-name" required />
            </div>

            <div className="govuk-form-group">
              <label htmlFor="email" className="govuk-label">Email Address</label>
              <input type="email" className="govuk-input" id="email" required />
            </div>

            <div className="govuk-form-group">
              <label htmlFor="phone" className="govuk-label">Phone Number (Optional)</label>
              <input type="tel" className="govuk-input" id="phone" />
            </div>

            <div className="govuk-form-group">
              <label htmlFor="language" className="govuk-label">Preferred Language</label>
              <select className="govuk-select" id="language">
                <option value="english">English</option>
                <option value="french">French</option>
              </select>
            </div>

            <div className="govuk-form-group">
              <label htmlFor="password" className="govuk-label">Password</label>
              <input type="password" className="govuk-input" id="password" required />
            </div>

            <p className="govuk-body">
              Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character.
            </p>

            <div className="govuk-button-group">
              <Link to="/activation" className="govuk-button govuk-button--start">Create Account</Link>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}

export default Register;
