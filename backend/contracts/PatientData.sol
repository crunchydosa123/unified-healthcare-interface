// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientData {
    struct Patient {
        string name;
        uint256 age;
        string disease;
        string[] medicalHistory;
    }

    mapping(string => Patient) private patients; // Mapping UUID to Patient data
    event PatientAdded(string patientId, string name);

    // Function to add a patient using UUID as primary key
    function addPatient(string memory _uuid, string memory _name, uint256 _age, string memory _disease, string[] memory _medicalHistory) public {
        Patient storage newPatient = patients[_uuid];
        newPatient.name = _name;
        newPatient.age = _age;
        newPatient.disease = _disease;
        newPatient.medicalHistory = _medicalHistory;
        
        emit PatientAdded(_uuid, _name);
    }

    // Function to retrieve patient by UUID
    function getPatient(string memory _uuid) public view returns (string memory name, uint256 age, string memory disease, string[] memory medicalHistory) {
        Patient storage patient = patients[_uuid];
        return (patient.name, patient.age, patient.disease, patient.medicalHistory);
    }

    // Check if patient exists
    function patientExists(string memory _uuid) public view returns (bool) {
        return bytes(patients[_uuid].name).length > 0;
    }
}
