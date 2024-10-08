import { html } from 'htm/preact';
import { AppStage } from '.';
import { getScene } from './lib/get_scene';
const Template = (args) => html`Hello fuck you world`;

export default {
  title: 'Scenes/Scenes',
  component: Template,
  argTypes: {}
};

export const Demo = AppStage.bind({});
Demo.args = getScene("2");

export const Scene00 = AppStage.bind({});
Scene00.args = getScene("0")

export const Scene02OpenDoor = AppStage.bind({});
Scene02OpenDoor.args = getScene("2");

export const Chapter01 = AppStage.bind({});
Chapter01.args = getScene("chapter1");
