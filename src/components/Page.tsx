import { Action } from "../utils";
import DarkMode from "./DarkMode";
import Display from "./Display";

type Props = {
  action?: Action;
  digit?: number;
};

const Page = ({ action, digit }: Props) => (
  <div className="relative flex min-h-screen items-stretch justify-center bg-stone-200 transition duration-700 dark:bg-zinc-800">
    <div
      className={`w-full bg-white transition duration-700 dark:bg-neutral-600 sm:m-8 sm:w-[36rem] sm:rounded-xl sm:shadow-lg`}
    >
      <div className="flex p-8 font-bold">
        <p className="rounded bg-blue-700 px-3 text-xl text-white">
          Calculator
        </p>
      </div>

      <div className="px-8 pb-8">
        <Display action={action} digit={digit} />
      </div>
    </div>
    <div className="absolute right-0 m-4 mx-8 sm:mx-4">
      <DarkMode />
    </div>
  </div>
);

export default Page;
