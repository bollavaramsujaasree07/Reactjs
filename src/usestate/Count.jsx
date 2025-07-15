import { useState } from "react";

function Counter() {
    const [score, setScore] = useState(0);

    function addOne() {
        setScore(score+1); 
    }
    function subractOne() {
        setScore(score-1); 
    }
    function resetScore() {
        setScore(0); 
    }
    return(
        <div>
            <h2>count: {score}</h2>
            <button onClick={addOne}>add</button>
            <button onClick={subractOne}>subract</button>
            <button onClick={resetScore}>Reset</button>
        </div>
    );
 }
export default Counter;