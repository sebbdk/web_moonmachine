import { html } from 'htm/preact';
import { StoryTeller, StoryTellerArgs } from '.';

export default {
  title: 'Scenes/GUI/storyteller',
  component: StoryTeller,
  argTypes: {}
};

export const Primary = StoryTeller.bind({});

Primary.args = {
	onPrev:  () => alert('prev was pressed'),
	onNext:  () => alert('next was pressed'),
	text: "Hello world",
} as StoryTellerArgs;