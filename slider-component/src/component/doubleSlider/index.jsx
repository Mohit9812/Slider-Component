import React, { useState, useEffect } from 'react';
import './styles.css';

const DoubleSlider = () => {
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(40);
  const [step] = useState(0.005);
  const [max] = useState(100);
  const [minTooltipPosition, setMinTooltipPosition] = useState((minValue / max) * 100);
  const [maxTooltipPosition, setMaxTooltipPosition] = useState((maxValue / max) * 100);

  useEffect(() => {
    updateSliderBackground();
    setMinTooltipPosition((minValue / max) * 100);
    setMaxTooltipPosition((maxValue / max) * 100);
  }, [minValue, maxValue]);

  const updateSliderBackground = () => {
    const sliderTrack = document.querySelector('.slider-track');
    const percentageMin = (minValue / max) * 100;
    const percentageMax = (maxValue / max) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #F2F3F5 ${percentageMin}%, #4CAF50 ${percentageMin}%, #4CAF50 ${percentageMax}%, #F2F3F5 ${percentageMax}%)`;
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="doubleSlider-container">
      <div className="slider-track"></div>
      <input
        type="range"
        min="0"
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        className="doubleSlider thumb-min"
      />
      <input
        type="range"
        min="0"
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className="doubleSlider thumb-max"
      />
      <div
        className="tooltip-double tooltip-double-min"
        style={{ left: `calc(${minTooltipPosition}% + 5px)` }}
      >
        {Math.floor(minValue)}
        <div className="tooltip-double-arrow"></div>
      </div>
      <div
        className="tooltip-double tooltip-double-max"
        style={{ left: `calc(${maxTooltipPosition}%)` }}
      >
        {Math.floor(maxValue)}
        <div className="tooltip-double-arrow"></div>
      </div>
    </div>
  );
};

export default DoubleSlider;
