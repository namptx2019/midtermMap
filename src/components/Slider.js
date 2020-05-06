import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import PlayButton from './SeekBar';
import Tooltip from '@material-ui/core/Tooltip';
import {useEffect, useState} from 'react';
import Moment from 'react-moment';
import { waitForDomChange } from '@testing-library/react';

const firstDate = '2019-12-08T00:00:00';
const startDate = Date.parse(firstDate);
const secPerDay = 86400000;
const currentDate = parseInt((Date.now() - startDate)/secPerDay);

const ToolTip = (dateData) =>{
  return(
    <Moment format="YYYY/MM/DD">
      {dateData}
    </Moment>
  )
}

const MakeTooltipData = (patients) =>{

  const start_date = Date.parse(firstDate);
  let result = [];
  waitForDomChange();

  for (let i = 0; i <= currentDate; i++){

    let time = start_date + i*secPerDay;
    let pointTimeLine = {
      value: i,
      label: ToolTip(time),
      list_patient: [],
    };
    
    for (let j=0; j < patients.length; j++){
      let verify_msec = Date.parse(patients[j].verifyDate);
      let delta_time = verify_msec - start_date;
      if (delta_time >=0 && verify_msec <= time){
        pointTimeLine.list_patient.push(patients[j]);
      }
    }
    result.push(pointTimeLine);
  }
  return result;

}

const SliderBar = ({patients, onLoadList, play}) => {

  
  const marker = MakeTooltipData(patients);
  console.log("marker");
  console.log(marker);
  console.log(play);

  const [value, setValue] = React.useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      
      if (play && value + 1 < marker.length){
        console.log("playing")
        setValue(value => value + 1);
        onLoadList(marker[value].list_patient);
      }
      if(!play) {
        console.log("stop")
        clearInterval(interval);
      }
      if (value === marker.length - 1){
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [play, value, marker, onLoadList]);

    const handleChange = (event, newValue) => {
      onLoadList(marker[newValue].list_patient);
      setValue(newValue);
    };

    function valueLabelFormat(value) {
      return null;
    }

    return(
      <Slider
        value={value}
        min={0}
        step={1}
        max={currentDate}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="auto"
        getAriaValueText={valueLabelFormat}
        onChange={handleChange}
      />
    )
}

export default SliderBar;