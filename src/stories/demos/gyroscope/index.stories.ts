import { html } from 'htm/preact';
import { GyroscopeDemo } from '.';
const Template = (args) => html`Hello fuck you world`;

export default {
  title: 'Demos/Gyroscope',
  component: Template,
  argTypes: {}
};

export const Primary = GyroscopeDemo.bind({});
Primary.args = {};
