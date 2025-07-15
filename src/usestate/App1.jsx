import { useState } from "react";

function ArjunBatting() {
    const [score, setScore] = useState(0);

    function hitFour() {
        setScore(score+4); 
    }
    function hitSix() {
        setScore(score+6); 
    }
    function resetScore() {
        setScore(0); 
    }
    return(
        <div>
            <h2>Arjun's Score: {score}</h2>
            <button onClick={hitFour}>Hit 4</button>
            <button onClick={hitSix}>Hit 6</button>
            <button onClick={resetScore}>Reset Score</button>
        </div>
    );
 }
export default ArjunBatting;