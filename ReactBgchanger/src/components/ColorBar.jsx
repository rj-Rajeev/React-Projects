import React, { useState } from "react";
import "./ColorBar.css";

const ColorBar = () => {
  let [color, setcolor] = useState("olive");
  return (
    <>
      <div style={{ backgroundColor: color }} className="main">
        <div className="container" style={{ backgroundColor: "#dadada" }}>
          <button onClick={()=>setcolor("red")} style={{ backgroundColor: 'red' }} className="red">Red</button>
          <button onClick={()=>setcolor("yellow")} style={{ backgroundColor: 'yellow' }} className="yellow">Yellow</button>
          <button onClick={()=>setcolor("blue")} style={{ backgroundColor: 'blue' }} className="blue">Blue</button>
          <button onClick={()=>setcolor("orange")} style={{ backgroundColor: 'orange' }} className="orange">Orange</button>
          <button onClick={()=>setcolor("pink")} style={{ backgroundColor: 'pink' }} className="pink">Pink</button>
          <button onClick={()=>setcolor("olive")} style={{ backgroundColor: 'olive' }} className="olive">Olive</button>
          <button onClick={()=>setcolor("skyblue")} style={{ backgroundColor: 'skyblue' }} className="skyblue">SkyBlue</button>
        </div>
      </div>
    </>
  );
};

export default ColorBar;
