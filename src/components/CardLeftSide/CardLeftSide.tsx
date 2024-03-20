import { useState } from "react";
import image from "../../assets/lines.svg";

const CardLeftSide = ({ number, setNumber, name, month, year,code }: any) => {
  const [contains, setContains] = useState(false);

  const handleChange = () => {
    const regex = /[a-zA-Z]/;

    if (regex.test(number)) {
      setContains(true);
      alert("Please enter only numeric symbols!");
    } else {
      setContains(false);
    }
  };

  if (number.length > 17) {
    alert("Credit card number lenght must not be more than 16 letters!");
    setNumber("");
  }

  return (
    <div className="CardLeftSide">
      <div className="CreditCardFaceSide">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-white rounded-full"></div>
          <div className="h-6 w-6 border-white border-2 border-solid  rounded-full"></div>
        </div>
        <div>
          <input
            type="text"
            className="bg-transparent focus:outline-none text-3xl text-white  placeholder-white tracking-widest  pointer-events-none"
            placeholder="0000 0000 0000 0000"
            value={number
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between gap-8">
          <input
            type="text"
            className="bg-transparent focus:outline-none text-lg text-white  placeholder-white tracking-widest pointer-events-none"
            placeholder="JANE APPLESEED"
            value={name}
          />
          <div className="flex gap-2 align-baseline">
            <input
              type="text"
              className="w-6 bg-transparent focus:outline-none text-lg text-white  placeholder-white tracking-widest pointer-events-none"
              readOnly
              placeholder="00"
              value={month}
            />
            <span className="text-white">/</span>
            <input
              type="text"
              className="w-7 bg-transparent focus:outline-none text-lg text-white  placeholder-white tracking-widest pointer-events-none"
              id="rtl"
              readOnly
              placeholder="00"
              value={year}
            />
          </div>
        </div>
      </div>
      <div className="CreditCardBackSide">
        <div className="w-full h-14 bg-black"></div>
        <div className="h-12 flex justify-center focus:outline-none  pointer-events-none ">
          <div className="flex justify-end w-80 bg-zinc-400 rounded-lg">
            <input
              type="text"
              className="w-10 text-white placeholder-white bg-zinc-400 rounded-lg"
              placeholder="000"
              value={code}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardLeftSide;
