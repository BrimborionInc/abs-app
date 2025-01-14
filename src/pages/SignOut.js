import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignOut() {
  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <h1 className="govuk-heading">You Have Been Signed Out</h1>
        <p className="govuk-body">
          You have successfully signed out of the system. To return to the home page, click below.
        </p>
        <Link to="/" className="govuk-link">Go to Welcome Page</Link>
      </main>
    </div>
  );
}

export default SignOut;
