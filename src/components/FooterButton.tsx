import { BiWindowOpen } from "react-icons/bi";

type Props = {
  onClick: () => void;
};

const FooterButton = ({ onClick }: Props) => (
  <button
    className="flex cursor-pointer items-center rounded-full bg-zinc-500 py-1 px-1.5 text-white shadow-md transition duration-700 dark:bg-zinc-400 dark:text-zinc-800 sm:hidden"
    onClick={onClick}
    title="Toggle footer"
    type="button"
  >
    <BiWindowOpen size="1.25rem" />
  </button>
);

export default FooterButton;
