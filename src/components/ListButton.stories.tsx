import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ListButton from "./ListButton";

const onClick = () => {
  console.log("CLICK");
};

const ListButtonStories: ComponentMeta<typeof ListButton> = {
  title: "App/Atoms/ListButton",
  component: ListButton,
};

const Template: ComponentStory<typeof ListButton> = (args) => (
  <ListButton {...args} />
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  onClick,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  onClick,
};

export const ClosedWithClassname = Template.bind({});
ClosedWithClassname.args = {
  isOpen: false,
  className: "text-4xl",
  onClick,
};

export default ListButtonStories;
