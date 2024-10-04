import { html } from 'htm/preact';
import { AppStage } from '.';
const Template = (args) => html`Hello fuck you world`;

export default {
  title: 'Scenes/Scenes',
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

export const Scene00 = AppStage.bind({});

Scene00.args = {
  sceneSrc:"raw_scenes/sc00/Sc00_HTML5_Canvas.js",
  composition: "3A9186C986474A73ACA4A389153EA561",
  assetsPath: "raw_scenes/sc00/",
  rootFunctionName: "Sc00_HTML5Canvas"
};

export const Scene02OpenDoor = AppStage.bind({});

Scene02OpenDoor.args = {
  sceneSrc:"raw_scenes/sc02/Sc02_HTML5_Canvas.js",
  composition: "F67B9604FC919F489D182E47F2203F03",
  assetsPath: "raw_scenes/sc02/",
  rootFunctionName: "Sc02_canvas_demo"
};

export const Chapter01 = AppStage.bind({});

Chapter01.args = {
  sceneSrc:"raw_scenes/chapter_01/Chapter_01_HTML5_Canvas.js",
  composition: "915EC3CCF88D4CA48A7D0A90825BB364",
  assetsPath: "raw_scenes/chapter_01/",
  rootFunctionName: "Chapter_01_HTML5Canvas"
};
