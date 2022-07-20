import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Page from "./Page";

const DISPLAY_COMPONENT = (
  <div className="flex h-40 items-center justify-center bg-yellow-500 text-2xl font-black text-white">
    Display
  </div>
);

const KEYBOARD_COMPONENT = (
  <div className="flex min-h-[10rem] items-center justify-center bg-yellow-500 text-2xl font-black text-white">
    Keyboard
  </div>
);

const getArgs = (backgroundClassName?: string) => ({
  hasLimitedHeigth: true,
  displayComponent: DISPLAY_COMPONENT,
  keyboardComponent: KEYBOARD_COMPONENT,
  backgroundClassName,
});

const PageStories: ComponentMeta<typeof Page> = {
  title: "App/Templates/Page",
  component: Page,
  parameters: {
    viewport: {
      defaultViewport: "smartphone",
    },
    layout: "fullscreen",
  },
};

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = getArgs();

export const WithFire = Template.bind({});
WithFire.args = getArgs("bg-fire");

export const WithSun = Template.bind({});
WithSun.args = getArgs("bg-sun");

export default PageStories;
