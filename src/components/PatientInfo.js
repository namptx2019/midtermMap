import React, {useEffect, useState} from 'react';

const PatientInfo = ({name, address, note, verifyDate}) => {
    return <ul style={{width: `200px`, color: `white`}}>
        <li>Name: {name}</li>
        <li>Address: {address}</li>
        <li>Note: {note}</li>
        <li>Verify Date: {verifyDate}</li>
    </ul>
};

export default PatientInfo;