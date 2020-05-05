import React, {useEffect, useState} from 'react';

const PatientInfo = ({name, address, note, verifyDate}) => {
    return <div>
        <b>Name: </b>{name} <br/>
        <b>Address: </b> {address}<br/>
        <b>Note: </b>{note}<br/>
        <b>Verify Date: </b> {verifyDate}<br/>
    </div>
};

export default PatientInfo;