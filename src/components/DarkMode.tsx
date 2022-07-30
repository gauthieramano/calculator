import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const DarkMode = () => {
  const { isEnabled, toggle } = useDarkMode();

  return (
    <button
      className="flex cursor-pointer items-center gap-3 rounded-full bg-zinc-500 p-1 text-white shadow-md transition duration-700 dark:bg-zinc-400 dark:text-zinc-800 sm:hover:bg-zinc-400 sm:dark:hover:bg-white lg:px-5"
      onClick={toggle}
      title={`Switch to ${isEnabled ? "light" : "dark"} mode`}
      type="button"
    >
      {isEnabled ? (
        <>
          <FaToggleOn
            // eslint-disable-next-line react/forbid-component-props
            className="hidden text-blue-700 lg:block"
            size="2rem"
          />
          <BsSunFill size="1.5rem" />
        </>
      ) : (
        <>
          <FaToggleOff
            // eslint-disable-next-line react/forbid-component-props
            className="hidden text-blue-700 lg:block"
            size="2rem"
          />
          <BsMoonStarsFill
            // eslint-disable-next-line react/forbid-component-props
            className="m-0.5"
            size="1.25rem"
          />
        </>
      )}
    </button>
  );
};

export default DarkMode;
