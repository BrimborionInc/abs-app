import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="govuk-footer" role="contentinfo">
      <div className="govuk-width-container">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <h2 className="govuk-visually-hidden">Support links</h2>
            <ul className="govuk-footer__inline-list">
              <li className="govuk-footer__inline-list-item">
                <Link to="/help" className="govuk-footer__link">Help</Link>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" href="/contact.html">Contact</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <Link to="/accessibility" className="govuk-footer__link">Accessibility</Link>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" href="#">Cookies</a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" href="/privacy.html">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="govuk-footer__meta-item govuk-footer__meta-item--logo">
            {/* Brimborion Inc Logo */}
            <svg width="150" height="50" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
              <title>Brimborion Inc Logo</title>
              <path fill="currentColor" d="M20 80 L60 20 L140 20 L180 80 Q150 60, 100 60 T20 80 Z" />
              <path fill="#ffffff" d="M100 40 L110 30 L130 30 L140 40 Q130 50, 100 40 Z" />
              <text x="50%" y="95" font-family="Arial, sans-serif" font-size="16" fill="currentColor" text-anchor="middle">
                Awentech Ltd
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
