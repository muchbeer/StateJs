import React from "react";
import { useState } from "react";



function App() {

    const timenow = new Date().toLocaleTimeString();

    const [nowtime, setTiming] = useState(timenow);
// const count = useState(3); and to use we use : count[0] cause the value is obtain in index 0
//setcount is the callback function that use parameter called count

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTiming(newTime);
    }

    setInterval(updateTime, 1000)

    return <div className="container">
    <h1> { nowtime } </h1>
    <button onClick={ updateTime  }> Get Time</button>
  </div>
}

export default App;