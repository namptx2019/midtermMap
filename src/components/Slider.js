import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import PlayButton from './PlayPause';
import Tooltip from '@material-ui/core/Tooltip';

const firstDate = '2019-12-08T00:00:00';
const startDate = Date.parse(firstDate);
const secPerDay = 86400000;
const currentDate = parseInt((Date.now() - startDate)/secPerDay);



const TooltipData = (patients) =>{

  let tooltipData = [];
  for(let i = 0; i <= currentDate; i++)
  {
    for(let j = 0; j < patients.length; j++)
    {
      
    }
  }

}

const SliderBar = ({patients, onLoadList}) => {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
      <Slider
        value={value}
        min={0}
        step={1}
        max={currentDate}

        onChange={handleChange}
      />
    )
}

export default SliderBar;