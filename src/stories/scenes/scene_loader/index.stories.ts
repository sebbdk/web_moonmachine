import { html } from 'htm/preact';
import { AppStage } from '.';
import { getScene } from './lib/get_scene';
const Template = (args) => html`Hello fuck you world`;

export default {
  title: 'Scenes/Scenes',
  component: Template,
  argTypes: {}
};

export const Scene00 = AppStage.bind({});
Scene00.args = getScene("0")

export const Scene01 = AppStage.bind({});
Scene01.args = getScene("1")

export const Scene02 = AppStage.bind({});
Scene02.args = getScene("2");

export const Scene03 = AppStage.bind({});
Scene03.args = getScene("3");

export const Scene04 = AppStage.bind({});
Scene04.args = getScene("4");

export const Scene05 = AppStage.bind({});
Scene05.args = getScene("5");

export const Scene06 = AppStage.bind({});
Scene06.args = getScene("6");

export const Scene07 = AppStage.bind({});
Scene07.args = getScene("7");

export const Scene08 = AppStage.bind({});
Scene08.args = getScene("8");

export const Scene09 = AppStage.bind({});
Scene09.args = getScene("9");

export const Scene10 = AppStage.bind({});
Scene10.args = getScene("10");

export const Chapter01 = AppStage.bind({});
Chapter01.args = getScene("chapter01");

export const Chapter02 = AppStage.bind({});
Chapter02.args = getScene("chapter02");

export const Chapter03 = AppStage.bind({});
Chapter03.args = getScene("chapter03");
