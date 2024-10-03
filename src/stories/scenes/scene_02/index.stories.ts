import { html } from 'htm/preact';
const Template = (args) => html`Hello world`;

export default {
  title: 'scenes/02',
  component: Template,
  argTypes: {}
};

export const Primary = Template.bind({});

Primary.args = {};