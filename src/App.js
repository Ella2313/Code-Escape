import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [level, setLevel] = useState(0);
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");

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
      alert("😼 Darn you goated! next stop level 3");
      setLevel(3);
    } else {
      alert("😬 MG not again! Don't worry, you got this!");
    }
  }

  return (
    <div className="App">
      {level === 0 && (
        <header className="App-header">
          <h1>Code Escape</h1>
          <p>Find clues, solve puzzles, and unlock your way out!</p>
          <button onClick={startGame}>Start Game</button>
        </header>
      )}

      {level === 1 && (
        <div className="App-header">
          <h2>Level 1: The Code Lock</h2>
          <p>Enter 3-digit escape code:</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={checkCode}>Unlock</button>
          <small>Hint: It's the reverse of 123.</small>
        </div>
      )}

      {level === 2 && (
        <div className="App-header">
          <h2>Level 2: The Riddle</h2>
          <p>
            I may grow short and death come close... but I have been with you in
            your darkest times! What am I?
          </p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={checkAnswer}>Submit Answer</button>
        </div>
      )}

      {level === 3 && (
        <div className="App-header">
          <h2>💭 Level 3: Unscramble</h2>
                  <p>Rearrange the letters to form something that can fly:</p>
            <h3>C F O L N A</h3>

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button
            onClick={() => {
              if (answer.toLowerCase() === "falcon") {
                alert("🦅 Bravo! You got it... onto the next level!");
                setAnswer("");
                setLevel(4);
            } else {
                 alert("😕 Darn this question fr... but you got this homie!");
              }
          }}
          >
                     Submit
                 </button>
             </div>
          )}
      {level === 4 && (
        <div className="App-header">
          <h2>🔢 Level 4: The Math quizz</h2>
          <p>solve this to open the next gate:</p>
          <h3>(9 x 7) + 4 = ?</h3>

          <input
          type="text"
          value={answer}
          onChange={(e) =>
    setAnswer(e .target.value)}
                />
                <button 
                onClick={() => {
                  if (answer === "67") {
                    alert("🫵🤌 magnifico! You are thus genuis!!");
                    setAnswer("");
                    setLevel(5);
                  } else {
                    alert("😑 ehemmm...lets try this agan! shall we?");
                  }
                }}
              >
                Submit
              </button>
          </div>
      )}
      
      {level === 5 && (
        <div className="App-header">
          <h2>🎨 Level 5: The Color Mystery!</h2>
          <p>The colors hide the mystery code within.... each color's first letter makes the password.</p>
          <h3>🟥 🟩 🟦 🟨</h3>
          <small>Hint: Red, Green, Blue, Yellow</small>

          <input
            type="text"
            value={answer}
            onChange={(e) =>
              setAnswer(e. target.value)}
                     />
                     <button
                     onClick={() => {
                      if (answer.toLocaleLowerCase() === "rgb y". replace(" ", "")) {
                        alert("😎 you are a master at this! The colors revel your way forward!");
                        setAnswer("");
                        setLevel(6);
                      } else {
                        alert("🥲 yk.. just keep on trying! The using the first letter of each color!");
                      }
                     }}
                  >
                    Submit
                  </button>
               </div>
      )}
      {level === 6 && (
        <div className="App-header">
          <h2>🃏 Level 6: Puzzle Mamble</h2>
          <p>Find the missing shape in this sequence:</p>
          <h3>🔷 ⬛ 🔷 ⬜ ___</h3>
          <small>Hint: Which pattern should come next?</small>

          <input
          type="text"
          value={answer}
          onChange={(e) =>
    setAnswer(e. target.value) }
        />
          <button 
          onClick={() => {
            if (answer.toLocaleLowerCase() === "🔷" || answer.toLocaleLowerCase() === "blue diamond" || answer.toLocaleLowerCase() === "diamond") {
              alert("🔷 kachow...sorry i love cars..ehemmmm. But you got it! Wonderful!!");
              setAnswer("");
              setLevel(7);
          } else {
              alert("👓 Holy... Camoly...look in closely and see victory!");
          }
        }}
    >
      Submit
    </button>
           </div>
      )}
      {level === 7 && (
        <div className="App-header">
          <h2>🤓 Level 7: The Pity Riddle</h2>
          <p>Every night I'm told what to do, and each morning I do what I'm told. But I still don't escape your scold. What am I?</p>
          <small>Hint: You can throw me any where and not care</small>

          <input
           



             </div>
                     );
            }

export default App;
