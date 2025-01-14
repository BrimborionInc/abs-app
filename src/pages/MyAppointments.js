import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    console.log('Fetching appointments...');
    fetch('http://localhost:5001/api/appointments')
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched appointments:', data);
        setAppointments(data);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  return (
    <div>
      <main className="govuk-main-wrapper govuk-width-container" role="main">
        <h1 className="govuk-heading">My Appointments</h1>
        <p className="govuk-hint">Here you can view and manage your appointments, book new appointments or manage your profile.</p>

        <div className="govuk-button-group">
          <Link to="/book-appointment" className="govuk-button" aria-label="Book a new appointment">Book a New Appointment</Link>
          <Link to="/profile" className="govuk-button" aria-label="View and edit your profile">My Profile</Link>
        </div>

        <h2 className="govuk-heading-l" style={{ marginTop: '30px' }}>Upcoming Appointments</h2>

        {appointments.map(appointment => (
          <div key={appointment.id} style={{ backgroundColor: '#f3f2f1', padding: '15px', borderLeft: '5px solid #0b0c0c', marginBottom: '15px' }}>
            <h3 className="govuk-heading-m">{appointment.title}</h3>
            <p className="govuk-body">
              Date: {appointment.date}<br />
              Time: {appointment.time}<br />
              Location: {appointment.location}
            </p>
            <Link to="/modify-appointment" className="govuk-link">Manage Appointment</Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export default MyAppointments;
