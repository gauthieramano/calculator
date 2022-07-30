import { FaCaretDown, FaCaretRight, FaList } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  classname?: string;
  onClick: () => void;
};

const ListButton = ({ isOpen, classname = "", onClick }: Props) => (
  <button
    className={`rounded-full bg-blue-700 p-3 text-white hover:bg-blue-500 ${classname}`}
    onClick={onClick}
    title={`${isOpen ? "Hide" : "Show"} previous computations`}
    type="button"
  >
    <div className="flex gap-2">
      {isOpen ? <FaCaretDown /> : <FaCaretRight />}
      <FaList />
    </div>
  </button>
);

export default ListButton;
