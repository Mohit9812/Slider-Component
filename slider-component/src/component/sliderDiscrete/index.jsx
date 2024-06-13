import React, { useEffect, useState } from "react";
import "./styles.css";

const SliderDiscrete = ({ steps }) => {
  const [value, setValue] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState(0);
  const max = 100;
  const step = steps;

  useEffect(() => {
    updateSliderBackground();
  }, [value]);

  const updateSliderBackground = () => {
    const percentage = (value / max) * 100;
    const sliderTrack = document.querySelector(".slider-discrete-track");
    sliderTrack.style.background = `linear-gradient(to right, #47B647 ${percentage}%, #F2F3F5 ${percentage}%)`;
    setTooltipPosition(percentage);
  };

  const createSliderSteps = () => {
    const steps = [];
    for (let i = 0; i <= max; i += step) {
      steps.push(
        <div
          key={i}
          className="slider-step"
          style={{ background: i <= value ? 'white' : '#47B647', zIndex: 3 }}
        />
      );
    }
    return steps;
  };

  return (
    <div className="slider-container-discrete">
      <div className="slider-discrete-track">{createSliderSteps()}</div>
      <input
        type="range"
        className="slider-discrete"
        min="0"
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      />
      <div
        className="tooltip-discrete"
        style={{ left: `calc(${tooltipPosition}% + 13px)` }}
      >
        {value}
        <div className="tooltip-discrete-arrow"></div>
      </div>
    </div>
  );
};

export default SliderDiscrete;
