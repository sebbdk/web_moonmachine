import { html } from 'htm/preact';
import { AppStage } from '.';
const Template = (args) => html`Hello fuck you world`;

export default {
  title: 'scenes/00_base',
  component: Template,
  argTypes: {}
};

export const Demo = AppStage.bind({});

Demo.args = {
  sceneSrc:"raw_scenes/sc02/Sc02_HTML5_Canvas.js",
  composition: "F67B9604FC919F489D182E47F2203F03",
  assetsPath: "raw_scenes/sc02/",
  rootFunctionName: "Sc02_canvas_demo"
};

export const Scene02 = AppStage.bind({});

Scene02.args = {
  sceneSrc:"raw_scenes/sc02/Sc02_HTML5_Canvas.js",
  composition: "F67B9604FC919F489D182E47F2203F03",
  assetsPath: "raw_scenes/sc02/",
  rootFunctionName: "Sc02_canvas_demo"
};
