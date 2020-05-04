import React, {useEffect, useState, useRef} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


const PatientList = ({Patients, selectedPatient, currentPatient}) => {

    const listPatients = Patients.map((patient, idx) =>{  
        if(currentPatient && currentPatient.name === patient.name){
          return(
            <div id="selected-item">
                <ListGroup.Item action key={idx} value={patient.name} onClick={() => {selectedPatient(patient)}} active>
                Name: {patient.name}, Verify Date: {patient.verifyDate}
                </ListGroup.Item>
            </div>);
        }else{
          return(
            <ListGroup.Item action key={idx} value={patient.name} onClick={() => {selectedPatient(patient)}}>
                Name: {patient.name}, Verify Date: {patient.verifyDate}
            </ListGroup.Item>);
        }
      }); 

    return(
        <SimpleBar style={{ maxHeight: `30vh`, maxWidth: `50vh` }}>
            <ListGroup key={Patients.id}>
                {listPatients}
            </ListGroup>
        </SimpleBar>
    );
};

export default PatientList;

