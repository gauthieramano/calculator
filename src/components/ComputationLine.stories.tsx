import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Action, Computation } from "../utils";

import ComputationLine from "./ComputationLine";

const COMPUTATION: Computation = {
  firstNumber: "789.12345",
  secondNumber: "69.20055",
  operation: Action.Add,
  result: "858.324",
  time: "1658396611503",
};

const getArgs = (className?: string) => ({
  computation: COMPUTATION,
  className,
});

/* ********************************************************
 *                        STORIES                         *
 **********************************************************/

const ComputationLineStories: ComponentMeta<typeof ComputationLine> = {
  title: "App/Molecules/ComputationLine",
  component: ComputationLine,
};

const Template: ComponentStory<typeof ComputationLine> = (args) => (
  <ComputationLine {...args} />
);

export const WithoutClassname = Template.bind({});
WithoutClassname.args = getArgs();

export const WithClassname = Template.bind({});
WithClassname.args = getArgs("text-xs");

export default ComputationLineStories;
