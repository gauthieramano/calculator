import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const DarkMode = () => {
  const { isEnabled, toggle } = useDarkMode();

  return (
    <button
      className="flex cursor-pointer items-center gap-3 rounded-full bg-zinc-500 px-5 py-1 text-white shadow-md transition duration-700 hover:bg-zinc-400 dark:bg-zinc-400 dark:text-zinc-800 dark:hover:bg-white"
      onClick={toggle}
    >
      {isEnabled ? (
        <>
          <FaToggleOn size="2rem" className="text-blue-700" />
          <BsSunFill size="1.5rem" />
        </>
      ) : (
        <>
          <FaToggleOff size="2rem" className="text-blue-700" />
          <BsMoonStarsFill size="1.25rem" className="ml-1" />
        </>
      )}
    </button>
  );
};

export default DarkMode;
