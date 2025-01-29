import React, { useState } from "react";
import { addPatient, updateMedicalHistory, getPatient } from "./blockchain/interact";

function App() {
  const [form, setForm] = useState({ name: "", age: "", medicalHistory: "", doctor: "" });
  const [patientData, setPatientData] = useState(null);

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddPatient = async () => {
    await addPatient(form.name, parseInt(form.age), form.medicalHistory, form.doctor);
    alert("Patient added successfully");
  };

  const handleUpdateMedicalHistory = async () => {
    await updateMedicalHistory(form.medicalHistory);
    alert("Medical history updated successfully");
  };

  const handleGetPatient = async () => {
    const data = await getPatient(form.doctor);
    setPatientData(data);
  };

  return (
    <div className="App">
      <h1>Blockchain Patient Management</h1>

      <div>
        <input name="name" placeholder="Name" onChange={handleInputChange} />
        <input name="age" placeholder="Age" type="number" onChange={handleInputChange} />
        <input name="medicalHistory" placeholder="Medical History" onChange={handleInputChange} />
        <input name="doctor" placeholder="Doctor Address" onChange={handleInputChange} />

        <button onClick={handleAddPatient}>Add Patient</button>
        <button onClick={handleUpdateMedicalHistory}>Update Medical History</button>
        <button onClick={handleGetPatient}>Get Patient</button>
      </div>

      {patientData && (
        <div>
          <h2>Patient Data</h2>
          <p>Name: {patientData.name}</p>
          <p>Age: {patientData.age}</p>
          <p>Medical History: {patientData.medicalHistory}</p>
        </div>
      )}
    </div>
  );
}

export default App;
