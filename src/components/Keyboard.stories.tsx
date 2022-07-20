import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Action } from "../utils";

import Keyboard from "./Keyboard";

const handleAction = (nextAction: Action, nextDigit?: number) => {
  console.log("CLICK", nextAction, nextDigit);
};

const KeyboardStories: ComponentMeta<typeof Keyboard> = {
  title: "App/Molecules/Keyboard",
  component: Keyboard,
  parameters: {
    viewport: {
      defaultViewport: "smartphone",
    },
  },
  decorators: [
    (Story) => (
      <div id="decorator" className="grid h-[20rem] sm:h-[30rem]">
        <Story />
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof Keyboard> = (args) => (
  <Keyboard {...args} />
);

export const Default = Template.bind({});
Default.args = { handleAction };

export default KeyboardStories;
