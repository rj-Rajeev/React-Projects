import React, { useRef,useCallback, useEffect, useState } from "react";
import "./Passgen.css";

const Passgen = () => {
  const [randomPass, setrandomPass] = useState("r");
  const [length, setlength] = useState(6);
  const [inclNumber, setinclnumber] = useState(false);
  const [inclChar, setinclChar] = useState(false);


  let genratePass = useCallback(()=>{
      let pass = ""
      setrandomPass("");
      let rowData = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(inclNumber) rowData+="1234567890";
      if(inclChar) rowData+="+@#$&*!";
  
      for (let i = 0; i < length; i++) {
        let value = Math.floor((Math.random()*rowData.length));
        console.log(length);
        pass += rowData.charAt(value);
      }
      setrandomPass(pass);

      copyBtn.current.innerText = 'copy';

    },[length,inclChar,inclNumber])

    const copyBtn = useRef(null)
    const copyPass = useRef(null)
    let copyPassword = () =>{
      window.navigator.clipboard.writeText(randomPass);
      copyBtn.current.innerText = 'copied'
      copyPass.current.select();

    } 


  
  useEffect(()=>{
    genratePass();
  },[length,inclChar,inclNumber]);


  


  return (
    <>
      <h1 className="heading">Random PassWord Genrator</h1>
      <div className="container">
        <div className="displayField">
          <input
            ref={copyPass}
            type="text"
            value={randomPass}
            placeholder="RendomPass"
            id="displayPass"
            readOnly
          />
          <label ref={copyBtn} onClick={copyPassword} id="copyBtn">copy</label>
        </div>

        <div className="inputField">
          <div className="lengthBar">
            <input
              type="range"
              name="range"
              id="range"
              placeholder="LengthBar"
              min={6}
              max={20}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="range">Length : {length}</label>
          </div>
          <div className="includeNum">
            <input
              type="checkbox"
              name="cheakbox"
              id="cheakbox"
              onChange={()=>setinclnumber((prev) => !prev)}
            />
            <label htmlFor="cheakbox">Numbers</label>
          </div>
          <div className="includeChar">
            <input
              type="checkbox"
              name="cheakbox"
              id="cheakbox"
              onChange={()=>setinclChar((prev) => !prev)}
            />
            <label htmlFor="cheakbox">Charecters</label>
          </div>
        </div>

        <button onClick={genratePass}>Genrate New PassWord</button>
      </div>
    </>
  );
};

export default Passgen;
