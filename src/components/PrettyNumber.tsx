type Props = {
  value: string;
  classname?: string;
};

const POINT = ".";

const PrettyNumber = ({ value, classname }: Props) => {
  const [integer, decimal] = value.split(".");
  const hasPoint = value.includes(".");

  return (
    <div className="flex">
      <p className="font-bold">{integer}</p>
      {
        // eslint-disable-next-line react/jsx-no-leaked-render
        hasPoint && (
          <>
            <p className="font-bold">{POINT}</p>
            {!!decimal && <p className={classname}>{decimal}</p>}
          </>
        )
      }
    </div>
  );
};

export default PrettyNumber;
