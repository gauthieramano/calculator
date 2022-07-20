import type { ComponentMeta, ComponentStory } from "@storybook/react";

import PrettyNumber from "./PrettyNumber";

const PrettyNumberStories: ComponentMeta<typeof PrettyNumber> = {
  title: "App/Atoms/PrettyNumber",
  component: PrettyNumber,
  decorators: [
    (Story) => (
      <div className="text-6xl">
        <Story />
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof PrettyNumber> = (args) => (
  <PrettyNumber {...args} />
);

export const Integer = Template.bind({});
Integer.args = {
  value: "123456",
};

export const Float = Template.bind({});
Float.args = {
  value: "123.456",
};

export const FloatWithClassmame = Template.bind({});
FloatWithClassmame.args = {
  value: "123.456",
  className: "text-4xl",
};

export default PrettyNumberStories;
