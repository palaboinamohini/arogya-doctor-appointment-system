const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

// Utility: Read & Write JSON Files
const readJSON = (file) => JSON.parse(fs.readFileSync(file));
const writeJSON = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// GET all doctors
app.get('/doctors', (req, res) => {
  const doctors = readJSON('doctors.json');
  res.json(doctors);
});

const doctorsData = readJSON('doctors.json')
const doctors = doctorsData.doctors
// GET a single doctor
app.get('/doctors/:id', (req, res) => {
  const doctorsData = readJSON('doctors.json')
  const doctors = doctorsData.doctors
  const doctor = doctors.find(d => d.id === parseInt(req.params.id));
  if (!doctor) return res.status(404).send("Doctor not found.");
  res.json(doctor);
});

app.post('/appointments', (req, res) => {
  const appointmentsPath = path.join(__dirname, 'appointments.json')
  const newAppointment = req.body

  let existing = []
  if (fs.existsSync(appointmentsPath)) {
    existing = JSON.parse(fs.readFileSync(appointmentsPath, 'utf-8'))
  }

  existing.push(newAppointment)
  fs.writeFileSync(appointmentsPath, JSON.stringify(existing, null, 2))
  res.status(201).json({ message: 'Appointment booked successfully' })
})



// Run server
app.listen(PORT, () => {
  console.log(`Doctor API running at http://localhost:${PORT}`);
});
