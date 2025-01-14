import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import MyAppointments from './pages/MyAppointments';
import SignOut from './pages/SignOut';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './AuthContext';
import Help from './pages/Help';
import Accessibility from './pages/Accessibility';
import BookAppointment from './pages/BookAppointment';
import BookAppointmentQ2 from './pages/BookAppointmentQ2';
import BookAppointmentQ3 from './pages/BookAppointmentQ3';
import BookAppointmentQ4 from './pages/BookAppointmentQ4';
import BookAppointmentQ5 from './pages/BookAppointmentQ5';
import BookAppointmentQ6 from './pages/BookAppointmentQ6';
import BookAppointmentQ7 from './pages/BookAppointmentQ7';
import BookAppointmentSummary from './pages/BookAppointmentSummary';

import './css/govuk-frontend.min.css';
import './css/style.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="govuk-main-wrapper govuk-width-container" role="main">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="/help" element={<Help />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/book-appointment-q2" element={<BookAppointmentQ2 />} />
            <Route path="/book-appointment-q3" element={<BookAppointmentQ3 />} />
            <Route path="/book-appointment-q4" element={<BookAppointmentQ4 />} />
            <Route path="/book-appointment-q5" element={<BookAppointmentQ5 />} />
            <Route path="/book-appointment-q6" element={<BookAppointmentQ6 />} />
            <Route path="/book-appointment-q7" element={<BookAppointmentQ7 />} />
            <Route path="/book-appointment-summary" element={<BookAppointmentSummary />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
