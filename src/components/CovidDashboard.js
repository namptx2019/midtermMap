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
    const loadList = (list) =>{
        setListPatient(list);
    }

    let PatientRef = useRef(null);

    const handlerScroll = () => {
        PatientRef.current.scrollIntoView({block:"start"});
    }
  
    console.log('Covid Dashboard render');
    return <Container>
        <Row>
            <Col><PatientList forwardedRef={PatientRef} /></Col>
            <Col xs={8}>
                <CovidMap
                    onPatientMarkerClicked={patientMarkerClickedHandler}
                     />
            </Col>

            <Col>
                {currentPatient &&
                <PatientInfo name={currentPatient.name} address={currentPatient.address} note={currentPatient.note}
                             verifyDate={currentPatient.verifyDate}/>}
            </Col>

        </Row>
    </Container>
};

export default CovidDashboard;