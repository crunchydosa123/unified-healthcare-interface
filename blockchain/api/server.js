import { AddDoctor, AddPatient, AddSurgery, GetAllDoctors, GetAllPatients, GetSingleDoctors, GetSinglePatient } from "./helper_functions.js";



// Add a new doctor
AddDoctor("Dr. Smith", 45, 70, 180).then(() => {
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
});
