import useToggle from "../hooks/useToggle";
import DarkMode from "./DarkMode";
import FooterButton from "./FooterButton";

type Props = {
  hasFullHeight: boolean;
  displayComponent: JSX.Element;
  keyboardComponent: JSX.Element;
  backgroundClassName?: string;
};

const CALCULATOR = "Calculator";

const Page = ({
  hasFullHeight,
  displayComponent,
  keyboardComponent,
  backgroundClassName = "",
}: Props) => {
  const [isFooterDisplayed, toggleFooter] = useToggle(true);

  return (
    <div
      className={`relative flex items-stretch justify-center bg-stone-200 transition duration-700 dark:bg-zinc-800 ${
        isFooterDisplayed
          ? "min-h-[calc(100vh_-_5rem)] sm:min-h-screen"
          : "min-h-screen"
      }`}
    >
      <div
        className={`grid w-full grid-rows-[auto_auto_1fr] bg-white bg-cover bg-center transition duration-700 dark:bg-neutral-600 sm:m-8 sm:w-[41rem] sm:rounded-3xl sm:shadow-lg ${
          hasFullHeight ? "" : "max-h-[1000px]"
        } ${backgroundClassName}`}
      >
        <div className="flex items-end gap-1 px-8 py-4 font-bold tall:py-8">
          <p className="rounded bg-blue-700 px-3 text-xl text-white">
            {CALCULATOR}
          </p>
        </div>

        <div className="sm:px-8">{displayComponent}</div>

        <div className="p-4 sm:px-8 tall:py-8">{keyboardComponent}</div>
      </div>

      <div className="absolute right-0 mr-2 mt-2 flex gap-3 sm:mt-4 lg:mr-4">
        <FooterButton onClick={toggleFooter} />
        <DarkMode />
      </div>
    </div>
  );
};

export default Page;
