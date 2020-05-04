import React, {useEffect, useState, useRef} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


const PatientList = ({Patients}) => {
             
    const listPatients = Patients.map((patient,index) => {
        return (
            <ListGroup.Item action >
                Name: {patient.name}, Verify Date: {patient.verifyDate}
           </ListGroup.Item>
        )
    })

    return(
        <SimpleBar style={{ maxHeight: `80vh`, maxWidth: `50vh` }}>
            <ListGroup>
                {listPatients}
            </ListGroup>
        </SimpleBar>
    );
};

export default PatientList;

