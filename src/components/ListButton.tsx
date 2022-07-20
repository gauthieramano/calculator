import { FaCaretDown, FaCaretRight, FaList } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  className?: string;
  onClick: () => void;
};

const ListButton = ({ isOpen, className = "", onClick }: Props) => (
  <button
    onClick={onClick}
    className={`rounded-full bg-blue-700 p-3 text-white hover:bg-blue-500 ${className}`}
  >
    <div className="flex gap-2">
      {isOpen ? <FaCaretDown /> : <FaCaretRight />}
      <FaList />
    </div>
  </button>
);

export default ListButton;
