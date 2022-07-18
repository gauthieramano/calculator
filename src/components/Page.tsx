import { Action } from "../utils";
import Display from "./Display";

type Props = {
  action?: Action;
  digit?: number;
};

const Page = ({ action, digit }: Props) => (
  <div className="relative flex min-h-screen items-stretch justify-center bg-stone-200">
    <div
      className={`w-full bg-white sm:m-8 sm:w-[36rem] sm:rounded-xl sm:shadow-lg`}
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
  </div>
);

export default Page;
