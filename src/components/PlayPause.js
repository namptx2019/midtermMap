import React from 'react';
import {Motion, spring} from 'react-motion';
import './PlayPause.scss';
import SliderBar from './Slider';

class PlayPause extends React.Component {
  render() {
    const { toggle, onClick } = this.props
    
    return(
      <Motion
        style={{scale: spring(toggle ? 1 : 0, [300, 30])}}
      >
        {({scale}) =>
          <button
            type="button"
            className="play-pause"
            onClick={onClick}
          >
            <span
              className="play-pause__playhead"
              style={{
                transform: `scaleX(${1 - scale})`,
                WebkitTransform: `scaleX(${1 - scale})`
              }}
            />
            <span
              className="play-pause__pausehead"
              style={{
                transform: `scaleX(${scale})`,
                WebkitTransform: `scaleX(${scale})`
              }}
            />
          </button>
        }
      </Motion>
    )
  }
}

class SeekBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false
    }
  }

  render() {
    const { isPlaying } = this.state

    return(
      <div style={{height:'50px', marginTop: '50px'}}>
            <div style={{float:'left', marginLeft: '10px'}}>
                <PlayPause
                  toggle={isPlaying}
                  onClick={() => this.setState({isPlaying: !isPlaying})}
                />
            </div>
            
            <div style={{marginLeft: '50px', marginRight: '20px'}}>
              <SliderBar/>
            </div>
      </div>
    )
  }
}

export default SeekBar;