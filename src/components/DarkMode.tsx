import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const DarkMode = () => {
  const { isEnabled, toggle } = useDarkMode();

  return (
    <button
      title={`Switch to ${isEnabled ? "light" : "dark"} mode`}
      onClick={toggle}
      className="flex cursor-pointer items-center gap-3 rounded-full bg-zinc-500 p-1 text-white shadow-md transition duration-700 dark:bg-zinc-400 dark:text-zinc-800 sm:hover:bg-zinc-400 sm:dark:hover:bg-white lg:px-5"
    >
      {isEnabled ? (
        <>
          <FaToggleOn size="2rem" className="hidden text-blue-700 lg:block" />
          <BsSunFill size="1.5rem" />
        </>
      ) : (
        <>
          <FaToggleOff size="2rem" className="hidden text-blue-700 lg:block" />
          <BsMoonStarsFill size="1.25rem" className="m-0.5" />
        </>
      )}
    </button>
  );
};

export default DarkMode;
