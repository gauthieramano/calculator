import type { ComponentMeta, ComponentStory } from "@storybook/react";

import FooterButton from "./FooterButton";

const onClick = () => {
  console.log("CLICK");
};

const FooterButtonStories: ComponentMeta<typeof FooterButton> = {
  title: "App/Atoms/FooterButton",
  component: FooterButton,
  parameters: {
    viewport: {
      defaultViewport: "smartphone",
    },
  },
};

const Template: ComponentStory<typeof FooterButton> = (args) => (
  <FooterButton {...args} />
);

export const Default = Template.bind({});
Default.args = { onClick };

export default FooterButtonStories;
