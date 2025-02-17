import { AddDoctor, AddPatient, AddSurgery, GetAllDoctors, GetAllPatients, GetSingleDoctors, GetSinglePatient, getAccount } from "./helper_functions.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/allDoctors', async (req, res) => {
  try {
    const items = await GetAllDoctors();
    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/allPatients', async (req, res) => {
  try {
    const items = await GetAllPatients();
    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/doctor/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await GetSingleDoctors(id);

    // Convert any BigInt values to strings
    const cleanedDoc = JSON.parse(JSON.stringify(doc, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    ));

    res.json({ doc: cleanedDoc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/patient/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await GetSinglePatient(id);

    const cleanedPatient = JSON.parse(JSON.stringify(patient, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    ));

    res.json({ patient: cleanedPatient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/addDoctor', async (req, res) => {
  try {
    const { doctor } = req.body;
    if (!doctor) return res.status(400).json({ error: "Doctor data not specified in request body" });

    const id = await AddDoctor(doctor.name, doctor.age, doctor.weight, doctor.height);
    console.log(`added doctor with id: ${id}`);
    res.json({ 
      message: `Doctor added id: ${id}`,
      id: id });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/addPatient', async (req, res) => {
  try {
    const patient = req.body;
    const patientId = await AddPatient(patient.name, patient.age, patient.weight, patient.height);

    res.json({ message: `Patient added with id: ${patientId}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/addSurgery', async (req, res) => {
  try {
    const surgery = req.body;
    const surgery_id = await AddSurgery(surgery.doctorid, surgery.patientid, surgery.description);
    res.json({ message: `Surgery added with id: ${surgery_id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// Add a new doctor
/*AddDoctor("Dr. Smith", 45, 70, 180).then(() => {
  console.log("Doctor added.");
});

// Get all doctors
GetAllDoctors().then((doctors) => {
  console.log("List of doctors:", doctors);
});

// Add a new patient
AddPatient("John Doe", 30, 75, 175).then(() => {
  console.log("Patient added.");
});

// Get all patients
GetAllPatients().then((patients) => {
  console.log("List of patients:", patients);
});*/
