import React from "react";

type props = {
  data: number;
  setData: React.Dispatch<React.SetStateAction<number>>;
};
const Three: React.FC<props> = ({ data, setData }) => {
  return (
    <div>
      <div>this is component three</div>
      <div>{data}</div>
    </div>
  );
};
export default Three;
