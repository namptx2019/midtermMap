import React, {useEffect, useState, useRef} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun) => useEffect(fun, [])

const PatientList = (handlerScroll, forwardedRef) => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
            .then(res => res.json())
            .then(
                (result) => {
                    setPatients(result.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                }
            )
    }, []);
    

    const listPatients=Array(patients.length).fill(null);
    for(let i = 0; i< patients.length; i++)
    {
        listPatients.push(
                <ListGroup.Item eventKey={i} action >
                    <div key={i}>
                        Name: {patients[i].name} <br/>
                        Address: {patients[i].address}
                    </div>
                </ListGroup.Item>   
        )
    }
        
    return(
        <SimpleBar style={{ maxHeight: `80vh`, maxWidth: `50vh` }} scrollableNodeProps={{ ref: forwardedRef }}>
            <ListGroup>
                {listPatients}
            </ListGroup>
        </SimpleBar>
    );
};

export default PatientList;

