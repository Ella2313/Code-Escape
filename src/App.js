import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [level, setLevel] =
useState(0);
  const [code, setCode] = useState("");
  const [answer, setAnswer] =
useState("");

  const correctCode = "321";
  const correctAnswer = "candle";

  function startGame() {
    setLevel(1);
  }
  function checkCode() {
    if (code === correctCode) {
      alert("😸 Correct! You've unlocked Level 2!");
      setLevel(2);
    } else {
      alert("😭 Oof! It's wrong... Let's try again!");
    }
  }

  function checkAnswer() {
    if (answer.toLowerCase() === correctAnswer) {
      alert("😼 Darn you goated! you just escaped!");
      setLevel(3);
    } else {
      alert("😬 MG not again! dont worry you got this!")
    }
  }

  return (
    <div className="App">
      {level === 0 && (
        <header className="App-header">
          <h1>Code Escape</h1>
          <p>Find clues, solve puzzles, and unlock your way out!</p>
          <button onClick={startGame} 
            >Start Game</button>
            </header>
          )}
          {level === 1 && (
            <div className="App-header">
              <h2> Level 1: The Code Lock</h2>
              <p>Enter 3 digit escape code:</p>
                <input
                type="text"
                value={code}
                onChange={(e) =>
          setCode(e . target.value)}
                      />
                      <button onClick={checkCode}>Unlock</button>
                      <small>Hint: It's the reverse of 123.</small>
                         </div>
                      )}
                      
                      {level === 2 && (
                        <div className="App=header">
                          <h2> Level 2: The Riddle</h2>
                          <p>I may grow short and death come close..but i have been with you in your darkest times!
                            What am I?
                          </p>
                          <input
                            type="text"
                            value={answer}
                            onChange={(e) =>
                      setAnswer(e. target.value)}
                            />
                            <button onClick={checkAnswer}>Submit Answer</button>
                            </div>
                         )}

                         {level === 3 && (
                           <div className="App=header">
                             <h2> 🐶 YAYY!</h2>
                             <p>You did itt! You made it out of the code room!</p>
                             <button onClick={() =>
                        setLevel(0)}>Play Again</button>
                        </div>
                      )}
                    </div>
                );
              }
export default App;
