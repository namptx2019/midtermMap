import React, {useEffect, useState, useRef} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const PatientList = (list) => {
     
    const listPatients= list.map((patient, index) => {
        return (
            <ListGroup.Item eventKey={index} action >
                <div key={index}>
                    Name: {patient.name}, Verify Date: {patient.verifyDate}
                </div>
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

