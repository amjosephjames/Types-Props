import React, { useState } from "react";
import Two from "./two";

const One = () => {
  const [data, setData] = useState<number>(0);
  return (
    <div>
      <div>this is component one</div>
      <Two data={data} setData={setData} />
    </div>
  );
};
export default One;
