// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Patients {
  struct Patient {
    string id;
    string name;
    uint age;
    uint weight;
    uint height;
  }

  struct Surgery{
    string id;
    string patientId;
    string doctorId;
    string description;
  }

  struct Doctor {
    string name;
    string id;
    uint age;
    uint weight;
    uint height;
    Patient[] patients;
  }

  Patient[] public patients;
  Doctor[] public doctors;
  Surgery[] public surgeries;
  uint public patientCount = 0;
  uint public doctorCount = 0;
  uint public surgeryCount = 0;

  function addDoctor(string memory _id, string memory _name, uint _age, uint _weight, uint _height) public {
    doctors.push(); 
    Doctor storage doctor = doctors[doctors.length - 1]; 
    doctor.id = _id;
    doctor.name = _name;
    doctor.age = _age;
    doctor.weight = _weight;
    doctor.height = _height;
    doctorCount++;
  }

  function getDoctors() public view returns(Doctor[] memory){
    return doctors;
  }

  function addSurgery(string memory _surgeryid, string memory _doctorid, string memory _patientid, string memory _description) public {
    surgeries.push(); 
    Surgery storage surgery = surgeries[doctors.length - 1]; 
    surgery.id = _surgeryid;
    surgery.patientId = _patientid;
    surgery.doctorId = _doctorid;
    surgery.description = _description;
    surgeryCount++;
  }

  function addPatient(string memory _id, string memory _name, uint _age, uint _weight, uint _height) public {
    patients.push(Patient(_id, _name, _age, _weight, _height));
    patientCount++;
  }

  function getPatients() public view returns(Patient[] memory){
    return patients;
  }

  function getPatientCount() public view returns(uint){
    return patientCount;
  }

  function getDoctor(string memory _id) public view returns (string memory, string memory, uint, uint, uint) {
        for (uint i = 0; i < doctors.length; i++) {
            if (keccak256(abi.encodePacked(doctors[i].id)) == keccak256(abi.encodePacked(_id))) {
                return (
                    doctors[i].id,
                    doctors[i].name,
                    doctors[i].age,
                    doctors[i].weight,
                    doctors[i].height
                );
            }
        }
        revert("Doctor not found");
    }

    function getSurgery(string memory _id) public view returns (string memory, string memory, string memory, string memory) {
        for (uint i = 0; i < surgeries.length; i++) {
            if (keccak256(abi.encodePacked(surgeries[i].id)) == keccak256(abi.encodePacked(_id))) {
                return (
                    surgeries[i].id,
                    surgeries[i].patientId,
                    surgeries[i].doctorId,
                    surgeries[i].description
                );
            }
        }
        revert("Surgery not found");
    }

    function getPatient(string memory _id) public view returns (string memory, string memory, uint, uint, uint) {
        for (uint i = 0; i < patients.length; i++) {
            if (keccak256(abi.encodePacked(patients[i].id)) == keccak256(abi.encodePacked(_id))) {
                return (
                    patients[i].id,
                    patients[i].name,
                    patients[i].age,
                    patients[i].weight,
                    patients[i].height
                );
            }
        }
        revert("Patient not found");
    }

}
