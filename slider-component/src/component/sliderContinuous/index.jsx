import React, { useState } from 'react';
import './styles.css';

const SliderContinuous = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState(0);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    const max = e.target.max;
    const percentage = (value / max) * 100;
    setSliderValue(value);
    e.target.style.background = `linear-gradient(to right, #4CAF50 ${percentage}%, #F2F3F5 ${percentage}%)`;
    setTooltipPosition(percentage);
  };

  return (
    <div className='slider-container'>
      <div className="tooltip-container">
        <input
          className='sliderContinuous'
          type="range"
          defaultValue={0}
          step={0.0001}
          min={0}
          max={100}
          onInput={handleSliderChange}
        />
        <div
          className="tooltip"
          style={{ left: `calc(${tooltipPosition}% - ${12*((tooltipPosition+1)/100)}px)` }}
        >
          {Math.floor(sliderValue)}
          <div className="tooltip-arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default SliderContinuous;


