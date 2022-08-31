import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount,subCount } from "./redux/action";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const count=useSelector(state=>state.count)
  const dispatch=useDispatch()
  const [input, setInput] = useState();

  return (
    <>
      <div className="counter">
        <button className="btn" onClick={() => dispatch(addCount())}>
          Increment by 1
        </button>
        <br />
        <button className="btn" onClick={() => dispatch(subCount())}>
          Decrement by 1
        </button>
        <br />
        {/* <div className="by">
          <button onClick={() => setCount(count + input)}>
            Add by {input}
          </button>
          <input onChange={(e)=>{
            
           setInput(+e.target.value)}}/>
        </div> */}
        <div className="by">
          <button onClick={()=>dispatch(addCount(input))} >
            Increment by {input}
          </button>
          <input
            onChange={(e) => {
              setInput(+e.target.value);
            }}
          />
        </div>
      </div>

      <h1>Count: {count}</h1>
    </>
  );
};

export default Counter;
