const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5001; // Changed port number to 5001

app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const appointmentsFilePath = path.join(__dirname, 'db.json');

let appointmentData = {};

// Load appointments from JSON file
const loadAppointments = () => {
  if (fs.existsSync(appointmentsFilePath)) {
    const data = fs.readFileSync(appointmentsFilePath);
    return JSON.parse(data).appointments;
  }
  return [];
};

// Save appointments to JSON file
const saveAppointments = (appointments) => {
  fs.writeFileSync(appointmentsFilePath, JSON.stringify({ appointments }, null, 2));
};

app.post('/api/save-appointment', (req, res) => {
  console.log('Received data:', req.body);
  appointmentData = { ...appointmentData, ...req.body };
  console.log('Updated appointment data:', appointmentData);
  res.status(200).send({ message: 'Appointment data saved successfully' });
});

app.get('/api/get-appointment', (req, res) => {
  console.log('Sending appointment data:', appointmentData);
  res.status(200).send(appointmentData);
});

app.get('/api/appointments', (req, res) => {
  const appointments = loadAppointments();
  res.status(200).send(appointments);
});

app.post('/api/appointments', (req, res) => {
  const appointments = loadAppointments();
  const newAppointment = req.body;
  appointments.push(newAppointment);
  saveAppointments(appointments);
  res.status(201).send({ message: 'Appointment added successfully' });
});

app.get('/api', (req, res) => {
  res.status(200).send({ message: 'API is working!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
