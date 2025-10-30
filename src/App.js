import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import background from "./background.png";
import AlertBox from "./AlertBox";
import correctSound from "./sounds/correct.mp3";
import wrongSound from "./sounds/wrong.mp3";
import clickSound from "./sounds/click.mp3";
import victorySound from "./sounds/victory.mp3";


function App() {
  const [alertMessage, setAlertMessage] = useState("");
  const [level, setLevel] = useState(0);
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");

    function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.volume = 0.6;
    audio.play();
  }


  const correctCode = "321";
  const correctAnswer = "candle";

  function startGame() {
    setLevel(1);
  }

  function checkCode() {
    if (code === correctCode) {
      playSound(correctSound);
                     setAlertMessage("😸 Correct! You've unlocked Level 2!");
               setLevel(2);
    } else {
      setAlertMessage("😭 Oof! It's wrong... Let's try again!");
            }
  }

  function checkAnswer() {
               if (answer.toLowerCase() === correctAnswer) {
                playSound(correctSound);
      setAlertMessage("😼 Darn you goated! next stop level 3");
      setLevel(3);
    } else {
             setAlertMessage("😬 MG not again! Don't worry, you got this!");
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
      <div className="level-box">
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
        </div>
      )}

      {level === 2 && (
        <div className="App-header victory-screen">
           <div className="level-box victory-box">
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
        </div>
      )}

      {level === 3 && (
        <div className="App-header victory-screen">
               <div className="level-box victory-box">
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
                playSound(correctSound);
                setAlertMessage("🦅 Bravo! You got it... onto the next level!");
                setAnswer("");
                setLevel(4);
            } else {
                 setAlertMessage("😕 Darn this question fr... but you got this homie!");
              }
          }}
          >
                     Submit
                 </button>
                 </div>
             </div>
          )}
      {level === 4 && (
        <div className="App-header victory-screen">
              <div className="level-box victory-box">
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
                    playSound(correctSound);
                    setAlertMessage("🫵🤌 magnifico! You are thus genuis!!");
                    setAnswer("");
                    setLevel(5);
                  } else {
                    setAlertMessage("😑 ehemmm...lets try this agan! shall we?");
                  }
                }}
              >
                Submit
              </button>
              </div>
          </div>
      )}
      
      {level === 5 && (
        <div className="App-header victory-screen">
             <div className="level-box victory-box">
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
                        playSound(correctSound);
                        setAlertMessage("😎 you are a master at this! The colors revel your way forward!");
                        setAnswer("");
                        setLevel(6);
                      } else {
                        setAlertMessage("🥲 yk.. just keep on trying! The using the first letter of each color!");
                      }
                     }}
                  >
                    Submit
                  </button>
                  </div>
               </div>
      )}
      {level === 6 && (
        <div className="App-header victory-screen">
             <div className="level-box victory-box">
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
              playSound(correctSound);
              setAlertMessage("🏎️ kachow...sorry i love cars..ehemmmm. But you got it! Wonderful!!");
              setAnswer("");
              setLevel(7);
          } else {
              setAlertMessage("👓 Holy... Camoly...look in closely and see victory!");
          }
        }}
    >
      Submit
    </button>
        </div>
           </div>
      )}
      {level === 7 && (
        <div className="App-header victory-screen">
             <div className="level-box victory-box">
          <h2>🤓 Level 7: The Pity Riddle</h2>
          <p>Every night I'm told what to do, and each morning I do what I'm told. But I still don't escape your scold. What am I?</p>
          <small>Hint: You can throw me any where and not care</small>

          <input
            type="text"
            value={answer}
            onChange={(e) =>
        setAnswer(e. target.value)}
               />
               <button
                 onClick={() => {
                  if (answer.toLowerCase() === "alarm clock") {
                    playSound(correctSound);
                    setAlertMessage("🗿 You need a sit of honor! you just got it! I would throw mine to the darn neighbors");
                    setAnswer("");
                    setLevel(8);
              } else {
                  setAlertMessage("💀...lets try..again. Think teen mode!");
                }
              }}
            >
              Submit
            </button>
            </div>
        </div>
      )}
      {level === 8 && (
        <div className="App-header victory-screen">
             <div className="level-box victory-box">
          <h2>🤔 Level 8: Memory Challenge</h2>
          <p>Memorize this numder code, then type it correctly order:</p>
          <h3>51324</h3>
          <small>Hint: It's not what you think..</small>

          <input
            type="text"
            value={answer}
            onChange={(e) =>
              setAnswer(e. target.value)}
                    />
                    <button
                    onClick={() => {
                      if (answer === "54321") {
                        playSound(correctSound);
                        setAlertMessage("😏🔪 Sharp! Brain level going up!!");
                        setAnswer("");
                        setLevel(9);
                   } else {
                        setAlertMessage("🤨 hmm? Try again we see..");
                   }
                  }}
              >
                Submit
              </button>
              </div>
          </div>
      )}
      {level === 9 && (
        <div className="App-header victory-screen">
            <div className="level-box victory-box">
          <h2>👺 Level 9 The final Boss!</h2>
          <p>You've come so far..But can you solve this last code?</p>
          <p>
            Combine the clues:
            <br />1...The number of colors in 
       level 5
            <br />2...The last digit from the
       memory Challenge
            <br />3...The number of letters in 
       the word "falcon"
          </p>
          <small>type the answer carefully.....</small>

          <input
            type="text"
            value={answer}
            onChange={(e) =>
      setAnswer(e .target.value)}
             />
             <button
               onClick={() => {
                if (answer === "416") {
                  playSound(correctSound);
                  setAlertMessage("😼 BOOM!! There goes the boss.. You just cracked the final lock!!!");
                  setAnswer("");
                  setLevel(10);
             } else {
                  setAlertMessage("😧 Nooo your so close...think about it!")
             }
            }}
          >
            Submit
          </button>
          </div>
        </div>
      )}
      {level === 10 && (
 <div className="App-header victory-screen">
     <div className="level-box victory-box">
    <h1>🏆 YOU DID IT! 🏆</h1>
    <h2>Congratulations, Code Breaker!</h2>
    <p>
      You’ve conquered all 10 levels of <strong>Code Escape</strong>!
    </p>
    <p>✨ You solved riddles, cracked codes, and proved your puzzle power! ✨</p>
        <h3>💫 You’re officially a Code Escape Champion! 💫</h3>

              <button
         onClick={() => {
        setAlertMessage("Restarting your adventure... good luck again!");
        setLevel(0);
        setCode("");
        setAnswer("");
      }}
    >
      Play Again 🔄
    </button>
    </div>

                <div style={{ fontSize: "2rem", marginTop: "20px" }}>
                🎊🎊🎊🎊🎊
    </div>
  </div>
)}
<AlertBox message={alertMessage} onClose={() => setAlertMessage("")} />

       </div>
   );
}

export default App;
