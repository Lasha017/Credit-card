import Button from "../button/Button";

const CardRightSide = ({
  number,
  setNumber,
  name,
  setName,
  month,
  setMonth,
  year,
  setYear,
  code,
  setCode
}: any) => {
  return (
    <>
      <div className="CardRightSide">
        <div>
          <label className="flex flex-column text-xs font-medium pb-2">
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="border border-gray rounded-md p-2  pr-36 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="flex flex-column text-xs font-medium pb-2">
            CARD NUMBER
          </label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className="border border-gray rounded-md p-2 pr-36 "
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <div>
            <label>Exp. Date (MM/YY)</label>
            <div className="flex gap-3">
              <input
                type="number"
                className="w-20 border border-gray rounded-md p-1"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                type="number"
                className="w-20 border border-gray rounded-md p-1"
                placeholder="YY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="flex" style={{ flexDirection: "column" }}>
            <label>CVC</label>
            <input
              type="text"
              className="w-48 border border-gray rounded-md p-1 pr-30"
              placeholder="e.g. 123"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default CardRightSide;
