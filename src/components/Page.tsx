import DarkMode from "./DarkMode";

type Props = {
  displayComponent: JSX.Element;
  keyboardComponent: JSX.Element;
};

const Page = ({ displayComponent, keyboardComponent }: Props) => (
  <div className="relative flex min-h-screen items-stretch justify-center bg-stone-200 transition duration-700 dark:bg-zinc-800">
    <div className="grid max-h-[1000px] w-full grid-rows-[auto_auto_1fr] bg-white transition duration-700 dark:bg-neutral-600 sm:m-8 sm:w-[36rem] sm:rounded-xl sm:shadow-lg">
      <div className="flex items-end gap-1 px-8 py-4 font-bold tall:py-8">
        <p className="rounded bg-blue-700 px-3 text-xl text-white">
          Calculator
        </p>
      </div>

      <div className="px-8">{displayComponent}</div>

      <div className="px-8 py-4 tall:py-8">{keyboardComponent}</div>
    </div>

    <div className="absolute right-0 mx-8 mt-2 sm:mx-4 tall:mt-4">
      <DarkMode />
    </div>
  </div>
);

export default Page;
