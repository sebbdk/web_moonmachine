import { html } from 'htm/preact';
import { AppStage } from '.';

const Template = (args) => html`Todo intro videos...`;

export default {
  title: 'menus/Intro videos',
  component: Template,
  argTypes: {}
};

export const Primary = Template.bind({});

Primary.args = {
  sceneSrc:"raw_scenes/sc02/Sc02_HTML5_Canvas.js",
  composition: "F67B9604FC919F489D182E47F2203F03",
  assetsPath: "raw_scenes/sc02/",
  rootFunctionName: "Sc02_canvas_demo"
};