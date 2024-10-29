import { html } from 'htm/preact';
import { AccelerometerDemo } from '.';
const Template = (args) => html`Hello fuck you world`;

export default {
  title: 'Demos/Accelerometer',
  component: Template,
  argTypes: {}
};

export const Primary = AccelerometerDemo.bind({});
Primary.args = {};
