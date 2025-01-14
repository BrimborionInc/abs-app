import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Help() {
  return (
    <main class="govuk-main-wrapper govuk-width-container" role="main">
        <h1 class="govuk-heading-l">Help and Support</h1>
        <p class="govuk-body">
            Welcome to the help and support section. Here you will find information and resources to assist you with your appointment booking, document preparation, and related inquiries.
        </p>

        <section class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
            <h2 class="govuk-heading-m">Frequently Asked Questions (FAQs)</h2>
            <ul class="govuk-list govuk-list--bullet">
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/biometrics.html" target="_blank" class="govuk-link">What are biometrics and who needs to provide them?</a></li>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application.html" target="_blank" class="govuk-link">How do I submit my documents?</a></li>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/check-processing-times.html" target="_blank" class="govuk-link">What are the processing times for applications?</a></li>
            </ul>
        </section>

        <section class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
            <h2 class="govuk-heading-m">Appointment-Related Issues</h2>
            <p class="govuk-body">
                If you are experiencing issues with booking or managing your appointment, please try the following steps:
            </p>
            <ul class="govuk-list govuk-list--bullet">
                <li>Ensure your browser is up to date.</li>
                <li>Clear your browser cache and cookies.</li>
                <li>Try accessing the page from another device or browser.</li>
            </ul>
            <p class="govuk-body">
                If problems persist, please visit our <a href="contact.html" class="govuk-link">Contact Us</a> page for more support.
            </p>
        </section>

        <section class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
            <h2 class="govuk-heading-m">Official Resources</h2>
            <p class="govuk-body">
                For more comprehensive and official information, please refer to the following IRCC resources:
            </p>
            <ul class="govuk-list govuk-list--bullet">
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html" target="_blank" class="govuk-link">Visit Canada</a></li>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals.html" target="_blank" class="govuk-link">Publications and Manuals</a></li>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services.html" target="_blank" class="govuk-link">IRCC Services Overview</a></li>
            </ul>
        </section>

        <section class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">
            <h2 class="govuk-heading-m">Technical Support</h2>
            <p class="govuk-body">
                For any technical issues or questions about this website, please contact our support team via the <a href="contact.html" class="govuk-link">Contact</a> page or by email at <a href="mailto:support@appointmentservice.com" class="govuk-link">support@appointmentservice.com</a>.
            </p>
        </section>
    </main>
  );
}

export default Help;
