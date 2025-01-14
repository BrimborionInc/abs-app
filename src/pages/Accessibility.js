import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Accessibility() {
  return (
    <main class="govuk-main-wrapper govuk-width-container" role="main">
        <h1 class="govuk-heading-l">Accessibility Information</h1>
        <p class="govuk-body">
            We are committed to providing an inclusive and accessible experience for all users. This page outlines the accessibility features available and how you can request assistance or accommodations when visiting our Visa Application Centres (VACs).
        </p>

        <section class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
            <h2 class="govuk-heading-m">Physical Accessibility</h2>
            <p class="govuk-body">
                Our VACs are designed to accommodate individuals with disabilities, including wheelchair access, step-free routes, and accessible facilities. Please contact your local VAC if you have specific questions or needs.
            </p>
        </section>

        <section class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
            <h2 class="govuk-heading-m">Web Accessibility</h2>
            <p class="govuk-body">
                This website is designed to be compliant with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. It includes features like:
            </p>
            <ul class="govuk-list govuk-list--bullet">
                <li>Keyboard navigation</li>
                <li>Screen reader compatibility</li>
                <li>High-contrast mode</li>
                <li>Text resizing and zoom support</li>
            </ul>
        </section>

        <section class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
            <h2 class="govuk-heading-m">Requesting Assistance</h2>
            <p class="govuk-body">
                If you or a member of your group requires additional assistance, such as sign language interpretation or extended time during an appointment, please contact the VAC in advance. Our staff will be happy to make the necessary arrangements to ensure a comfortable and accessible experience.
            </p>
            <p class="govuk-body">
                For urgent or emergency assistance, please call our support center or visit the VAC in person.
            </p>
        </section>

        <div class="govuk-button-group">
            <a href="contact.html" class="govuk-button govuk-button--secondary">Contact Us for Assistance</a>
            <Link to="/" className="govuk-button">Back to Home</Link>
        </div>
    </main>
  );
}

export default Accessibility;
