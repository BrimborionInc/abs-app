import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

function Login() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('userLoggedIn', 'true');
    setIsAuthenticated(true); // Set the context state immediately after setting localStorage
    navigate('/my-appointments');
  };

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <h1 className="govuk-heading">Sign In</h1>
        <p className="govuk-hint">
          Sign in with your email and password, or use your Government of Canada ID for secure access.
        </p>
        
        <form onSubmit={handleLogin}>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="email">Email address</label>
            <input className="govuk-input" id="email" name="email" type="email" required />
          </div>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="password">Password</label>
            <input className="govuk-input" id="password" name="password" type="password" required />
          </div>
          <div className="govuk-button-group">
            <button type="submit" className="govuk-button">Sign In</button>
            <a href="/" className="govuk-button govuk-button--secondary">Cancel</a>
          </div>
        </form>
        <p className="govuk-body">
          Don't have an account? <a href="/register" className="govuk-link">Register here</a>.
        </p>

        {/* Demo links */}
        <p className="govuk-body" style={{ marginTop: '20px' }}><strong>For Demo Only:</strong></p>
        <p className="govuk-hint">In production, staff will have a separate login using AWS IAM.  In the protoype click on the link below to view the admin console.</p>
        <ul className="govuk-list">
          <li><a href="/admin-landing-page" className="govuk-link">Admin Console (Staff) Demo</a></li>
        </ul>


        <div className="horizontal-line"></div>

        {/* Government of Canada ID button */}
        <div className="govuk-button-group">
          <a href="#" className="govuk-button canada-id-button">
            <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
              <path fill="#FF0000" d="M0 0h4v16H0zM20 0h4v16h-4z" />
              <path fill="#FFFFFF" d="M4 0h16v16H4z" />
              <path fill="#FF0000" d="M12 1l-.7 2.3H9.5L11 6l-1 3 2-1 2 1-1-3 1.5-2.7h-1.8z" />
            </svg>
            Single Sign In
          </a>
        </div>
        <p className="govuk-hint">
          Government Sign-In is not in current scope, but could be a feature once IRCC migrates to its new platforms.
        </p>
      </main>
    </div>
  );
}

export default Login;
