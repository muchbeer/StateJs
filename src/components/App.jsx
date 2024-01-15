import React from "react";
import { useState } from "react";



function App() {

    const [count, setCount] = useState(0);
// const count = useState(3); and to use we use : count[0] cause the value is obtain in index 0
//setcount is the callback function that use parameter called count

    function counting() {
        setCount(count + 1);
    }

    return <div className="container">
    <h1> { count } </h1>
    <button onClick={ counting  }>+</button>
  </div>
}

export default App;