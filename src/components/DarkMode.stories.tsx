import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DarkMode from "./DarkMode";

const DarkModeStories: ComponentMeta<typeof DarkMode> = {
  title: "App/Atoms/DarkMode",
  component: DarkMode,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col items-stretch">
        <div className="bg-white p-20 dark:bg-neutral-600">
          <Story />
        </div>

        <p className="pt-4 text-neutral-600">
          <span className="text-xl">📝 Note:</span>{" "}
          <span className="text-sm italic">
            Exceptionally, don&apos;t enable dark mode through the dedicated
            button in the toolbar because it interferes with the component
            behavior (and vice versa). Also, before navigating to other stories,
            make sure the component is in light mode.
          </span>
        </p>
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof DarkMode> = () => <DarkMode />;

export const Default = Template.bind({});

export default DarkModeStories;
