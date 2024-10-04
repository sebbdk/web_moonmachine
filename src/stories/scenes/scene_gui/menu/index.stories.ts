import { html } from 'htm/preact';
import { BottomMenu } from '.';

const Template = (args) => html`Todo scene GUI...`;

export default {
  title: 'Scenes/GUI/Menu',
  component: BottomMenu,
  argTypes: {}
};

export const Primary = BottomMenu.bind({});

Primary.args = {
  open:true
};