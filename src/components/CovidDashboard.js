import React, {useEffect, useState, useRef} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidGoogleMap from "./CovidGoogleMap";
import PatientInfo from "./PatientInfo";
import PatientList from "./PatientList";
import Container from "react-bootstrap/Container";
import CovidMap from "./CovidMap";


const CovidDashboard = (props) => {
    const [currentPatient, setCurrentPatient] = useState();
    const patientMarkerClickedHandler = (patient) => {
        setCurrentPatient(patient);
    }

    const [listPatient, setListPatient] = useState();
    const onLoadListHandler = (list) =>{
        setListPatient(list);
    }

    let PatientRef = useRef(null);

    const handlerScroll = () => {
        PatientRef.current.scrollIntoView({block:"start"});
    }
  
    console.log('Covid Dashboard render');
    return(
    <Container>
        <Row>
            <Col xs={8}>
                <CovidMap
                    onPatientMarkerClicked={patientMarkerClickedHandler}
                    onLoadList={onLoadListHandler}
                     />
            </Col>

            <Col>
                <div style={{borderRadius: '5px', backgroundColor: 'white', padding: '10px', paddingBottom: '50px', marginBottom: '10px'}}>
                    <h5 style={{textAlign:"center", paddingTop: '5px'}}>List Patients</h5>
                    {listPatient && <PatientList Patients={listPatient} selectedPatient={patientMarkerClickedHandler} currentPatient={currentPatient} />}
                </div>
                
                <div style={{borderRadius: '5px', backgroundColor: 'white', padding: '10px', paddingBottom: '50px'}}>
                    <h5 style={{textAlign:"center", paddingTop: '5px'}}>Patient Infor</h5>
                    {currentPatient &&
                    <PatientInfo id="patient-info" name={currentPatient.name} address={currentPatient.address} note={currentPatient.note}
                                verifyDate={currentPatient.verifyDate}/>}
                </div>
                
            </Col>

        </Row>
    </Container>)
};

export default CovidDashboard;