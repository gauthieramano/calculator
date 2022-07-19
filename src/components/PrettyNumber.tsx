type Props = {
  value: string;
  className?: string;
};

const PrettyNumber = ({ value, className }: Props) => {
  const [integer, decimal] = value.split(".");
  const hasPoint = value.includes(".");

  return (
    <div className="flex">
      <p className="font-bold">{integer}</p>
      {hasPoint && <p className="font-bold">.</p>}
      {decimal !== "" && <p className={className}>{decimal}</p>}
    </div>
  );
};

export default PrettyNumber;
