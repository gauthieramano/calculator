import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Action } from "../utils";

import Key from "./Key";
import { ACTION_MAPPING } from "./storybook-constants";

const handleAction = (nextAction: Action, nextDigit?: number) => {
  console.log("CLICK", nextAction, nextDigit);
};

const getArgs = (action: Action, digit?: number) => ({
  action,
  digit,
  className: "font-bold text-4xl",
  handleAction,
});

/* ********************************************************
 *                        STORIES                         *
 **********************************************************/

const KeyStories: ComponentMeta<typeof Key> = {
  title: "App/Atoms/Key",
  component: Key,
  argTypes: {
    action: ACTION_MAPPING,
  },
  decorators: [
    (Story) => (
      <div className="grid h-24 w-24">
        <Story />
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof Key> = (args) => <Key {...args} />;

export const DigitOne = Template.bind({});
DigitOne.args = getArgs(Action.SetDigit, 1);

export const Point = Template.bind({});
Point.args = getArgs(Action.SetPoint);

export const Add = Template.bind({});
Add.args = getArgs(Action.Add);

export const Substract = Template.bind({});
Substract.args = getArgs(Action.Substract);

export const Multiply = Template.bind({});
Multiply.args = getArgs(Action.Multiply);

export const Divide = Template.bind({});
Divide.args = getArgs(Action.Divide);

export const Equal = Template.bind({});
Equal.args = getArgs(Action.Equal);

export const Delete = Template.bind({});
Delete.args = getArgs(Action.Delete);

export const Reset = Template.bind({});
Reset.args = getArgs(Action.Reset);

export default KeyStories;
