import { useEffect, useState } from "react";
import "./App.css";
import CardLeftSide from "./components/CardLeftSide/CardLeftSide";
import CardRightSide from "./components/CardRightSide/CardRightSide";
import image from "./assets/tablogo.jpg";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    document.title = "Credit-card";
  });

  return (
    <>
      <link rel="icon" type="image/x-icon" href={`${image}`} />
      <div className="flex gap-96">
        <CardLeftSide
          number={number}
          setNumber={setNumber}
          name={name}
          month={month}
          year={year}
          code={code}
        />
        <CardRightSide
          setNumber={setNumber}
          value={name}
          name={name}
          setName={setName}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          code={code}
          setCode={setCode}
        />
      </div>
    </>
  );
}

export default App;
