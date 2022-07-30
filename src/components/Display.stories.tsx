import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Action, Computation } from "../utils";

import Display from "./Display";
import { OPERATION_MAPPING } from "./storybook-constants";

const TEXT1 = "📝 Note:";
const TEXT2 =
  "If dark mode can't be disabled through the dedicated button in the toolbar, open the";
const TEXT3 = "Atoms / DarkMode / Default";
const TEXT4 =
  "story, swith the component to light mode, and come back here (the button will work as expected).";

const toggleList = () => {
  console.log("TOGGLE");
};

const COMPUTATION_1: Computation = {
  firstNumber: "789.12345",
  secondNumber: "69.20055",
  operation: Action.Add,
  result: "858.324",
  time: "1658396611503",
};

const COMPUTATION_2: Computation = {
  firstNumber: "858",
  secondNumber: "2",
  operation: Action.Divide,
  result: "429",
  time: "1658396611603",
};

const COMPUTATION_3: Computation = {
  time: "1658396611703",
  operation: Action.Substract,
  firstNumber: "987654321",
  secondNumber: "12.345678901",
  result: "987654308.65",
};

const getArgs = (isListDisplayed: boolean) => ({
  operation: Action.Multiply,
  firstNumber: "329",
  secondNumber: "18.05",
  lastComputation: COMPUTATION_3,
  previousComputations: [COMPUTATION_1, COMPUTATION_2],
  isListDisplayed,
  toggleList,
});

/* ********************************************************
 *                        STORIES                         *
 **********************************************************/

const DisplayStories: ComponentMeta<typeof Display> = {
  title: "App/Organisms/Display",
  component: Display,
  parameters: {
    viewport: {
      defaultViewport: "smartphone",
    },
    layout: "fullscreen",
  },
  argTypes: {
    operation: OPERATION_MAPPING,
  },
  decorators: [
    (Story) => (
      <div>
        <div className="py-10 sm:px-8">
          <Story />
        </div>

        <p className="px-4 text-neutral-500">
          <span className="text-xl">{TEXT1}</span>{" "}
          <span className="text-sm italic">
            {TEXT2}{" "}
            <span className="bg-amber-200 text-black">&nbsp;{TEXT3}&nbsp;</span>{" "}
            {TEXT4}
          </span>
        </p>
      </div>
    ),
  ],
};

const Template: ComponentStory<typeof Display> = (args) => (
  <Display {...args} />
);

export const NoSecondNumber = Template.bind({});
NoSecondNumber.args = {
  operation: Action.Multiply,
  firstNumber: "329",
  secondNumber: "",
  previousComputations: [],
  isListDisplayed: false,
  toggleList,
};

export const NoComputation = Template.bind({});
NoComputation.args = {
  operation: Action.Multiply,
  firstNumber: "329",
  secondNumber: "18.05",
  previousComputations: [],
  isListDisplayed: false,
  toggleList,
};

export const HiddenList = Template.bind({});
HiddenList.args = getArgs(false);

export const DisplayedList = Template.bind({});
DisplayedList.args = getArgs(true);

export default DisplayStories;
