import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = (event) => {
    event.preventDefault(); // Prevent default link behavior
    localStorage.removeItem('userLoggedIn');
    setIsAuthenticated(false);
    setMenuOpen(false);
    navigate('/sign-out'); // Redirect to the Welcome screen
  };

  return (
    <header className="govuk-header" role="banner" style={{ backgroundColor: '#0b0c0c', padding: '15px' }}>
      <div className="govuk-width-container govuk-header__container">
        <Link to="/" className="govuk-header__logotype govuk-header__link">ABS - Prototype - v06.11.24</Link>

        <button
          className="govuk-header__menu-icon"
          aria-label="Toggle navigation"
          style={{background: 'none', border: 'none', color: 'white', fontSize: '24px' }}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav className={`govuk-header__navigation ${menuOpen ? 'open' : ''}`} aria-label="Top Level Navigation">
          <ul className="govuk-header__navigation-list">
            <li className="govuk-header__navigation-item">
              <Link to="/help" className="govuk-header__link">Help/Support</Link>
            </li>
            <li className="govuk-header__navigation-item">
              <Link to="/accessibility" className="govuk-header__link">Accessibility</Link>
            </li>
            <li className="govuk-header__navigation-item">
              <a href="#" className="govuk-header__link">Français</a>
            </li>
            <li className="govuk-header__navigation-item">
              <a href="#" className="govuk-header__link">English</a>
            </li>

            {isAuthenticated ? (
              <>
                <li className="govuk-header__navigation-item">
                  <Link to="/account" className="govuk-header__link">Account</Link>
                </li>
                <li className="govuk-header__navigation-item">
                  <a href="/sign-out" onClick={handleSignOut} className="govuk-header__link">Sign Out</a>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
