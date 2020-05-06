import React, {useEffect, useState, useRef} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerPatient from './MarkerPatient';

const CovidMap = ({onPatientMarkerClicked, onLoadList, staticData, loadPatientOnTime, currentPatient}) => {
    const [patients, setPatients] = useState([]);
    const [center, setCenter] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        await fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
            .then(res => res.json())
            .then(
                (result) => {
                    setPatients(result.data);
                    staticData(result.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                }
            )
    },[]);

    return <Map center={[10.762887, 106.6800684]} zoom={13} style={{height: `500px`}}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {loadPatientOnTime && loadPatientOnTime.map((patient,index) =>{
            return <MarkerPatient
                lat={patient.lat}
                lng={patient.lng}
                key={index}
                patient={patient}
                onPatientMarkerClicked={onPatientMarkerClicked}
                onLoadList={onLoadList}
                patients={loadPatientOnTime}/>
        })} 
    </Map>;
};

export default CovidMap;
