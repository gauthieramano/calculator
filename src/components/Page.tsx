import DarkMode from "./DarkMode";

type Props = {
  displayComponent: JSX.Element;
};

const Page = ({ displayComponent }: Props) => (
  <div className="relative flex min-h-screen items-stretch justify-center bg-stone-200 transition duration-700 dark:bg-zinc-800">
    <div
      className={`w-full bg-white transition duration-700 dark:bg-neutral-600 sm:m-8 sm:w-[36rem] sm:rounded-xl sm:shadow-lg`}
    >
      <div className="flex p-8 font-bold">
        <p className="rounded bg-blue-700 px-3 text-xl text-white">
          Calculator
        </p>
      </div>

      <div className="h-[233px] px-8 pb-8">{displayComponent}</div>
    </div>

    <div className="absolute right-0 m-4 mx-8 sm:mx-4">
      <DarkMode />
    </div>
  </div>
);

export default Page;
