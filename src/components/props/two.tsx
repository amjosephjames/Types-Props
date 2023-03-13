import React from "react";
import Three from "./three";

type Props = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};
const Two: React.FC<Props> = ({ data, setData }) => {
  const addNumber = () => {
    setData(data + 1);
  };
  return (
    <div>
      <div>this is component two</div>
      <Three data={data} setData={setData} />
      <button onClick={addNumber}>add data</button>
    </div>
  );
};
export default Two;
