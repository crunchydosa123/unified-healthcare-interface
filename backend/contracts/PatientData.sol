// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientData {
    struct Patient {
        string name;
        uint age;
        string medicalHistory;
        address doctor;
    }

    mapping(address => Patient) public patients;

    event PatientUpdated(address indexed patientAddress, string name, uint age, string medicalHistory);

    modifier onlyAuthorized(address _patientAddress) {
        require(msg.sender == _patientAddress || msg.sender == patients[_patientAddress].doctor, "Not authorized");
        _;
    }

    function addPatient(string memory _name, uint _age, string memory _medicalHistory, address _doctor) public {
        patients[msg.sender] = Patient(_name, _age, _medicalHistory, _doctor);
    }

    function updateMedicalHistory(string memory _medicalHistory) public onlyAuthorized(msg.sender) {
        patients[msg.sender].medicalHistory = _medicalHistory;
        emit PatientUpdated(msg.sender, patients[msg.sender].name, patients[msg.sender].age, _medicalHistory);
    }

    function getPatient(address _patientAddress) public view returns (Patient memory) {
        return patients[_patientAddress];
    }
}
