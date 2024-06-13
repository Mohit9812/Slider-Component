import { fn } from "@storybook/test";
import Slider from './component'


export default {
  title: 'Slider Component',
  component: Slider,
  argTypes: {
    type: {control: 'select', options: ["Discrete", "Continuous"]},
    subtype: {control: 'select', options: ["Single", "Range"]},
    steps: {control: 'select', options: [1,2,3,4,5,6,7,8,9,10]}
  },
  args: { onChange: fn() }

}

export const SliderComponent = {
  args: {
    type: "Continuous",
    subtype: "Single",
    steps: 5
  }
}