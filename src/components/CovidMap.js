import React, {useEffect, useState} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerPatient from './MarkerPatient';

const CovidMap = ({onPatientMarkerClicked, onLoadList}) => {
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
    }, [])
    return <Map center={[10.762887, 106.6800684]} zoom={13} style={{height: `80vh`}}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {patients.map((patient,index) =>{
            return <MarkerPatient
                key={index}
                patient={patient}
                onPatientMarkerClicked={onPatientMarkerClicked}
                onLoadList={onLoadList}
                patients={patients}/>
        })} 
    </Map>;
};

export default CovidMap;
