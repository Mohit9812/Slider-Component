import SliderContinuous from "./sliderContinuous";
import SliderDiscrete from "./sliderDiscrete";
import DoubleSlider from "./doubleSlider";


const Slider = ({type, subtype, steps = 5}) => {
    return(
        (type === 'Discrete') ? 
        <SliderDiscrete steps={steps}/> : 
        ((subtype === 'Range') ?
        <DoubleSlider/> :
        <SliderContinuous/>)
    );
}

export default Slider;