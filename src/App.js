import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [player1RandomChar, setPlayer1RandomChar] = useState("");
  const [player2RandomChar, setPlayer2RandomChar] = useState("");
  const [time, setTime] = useState(3);
  const [player1Won, setPlayer1Won] = useState("");
  const [player2Won, setPlayer2Won] = useState("");

  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  //const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
    useEffect(() => {
      const eventListener = (event) => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  };

  const handler = ({ key }) => {
    if (player1RandomChar === String(key)) {
      setPlayer1Won("won");
    } else if (player2RandomChar === String(key)) {
      setPlayer2Won("won");
    }
  };

  useEventListener("keydown", handler);

  useEffect(() => {
    if (startTimer) {
      let timer = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            var char1 = ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
            var char2 = ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
            while (char1 === char2) {
              char2 = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
            }
            setPlayer1RandomChar(char1);
            setPlayer2RandomChar(char2);
            setGameStart(true);
            clearInterval(timer);
            return 0;
          } else return time - 1;
        });
      }, 1000);
    }
  }, [startTimer]);

  function handleCountdownStart() {
    setStartTimer(true);
  }

  return (
    <div className="App">
      <div className="h-screen flex flex-col justify-center items-center gap-3">
        <div className="text-3xl"> Smash the key! </div>
        <div className="h-auto container border-2 border-black rounded">
          <div className="text-xl grid gap-2 grid-cols-2 content-stretch text-center">
            <div className={`${player1Won} bg-sky-500 py-0.5 mt-4 mb-2 mx-6 rounded`}>
                Player 1
            </div>
            <div className={`${player2Won} bg-sky-500 py-0.5 mt-4 mb-2 mx-6 rounded`}>
                Player 2
            </div>
          </div>
          <div className="text-4xl grid gap-2 grid-cols-2 content-stretch text-center">
              <div className="bg-sky-500 py-0.5 my-0.5 mx-6 flex items-center justify-center rounded">
                {gameStart ? player1RandomChar : "Not started"}
              </div>
              <div className="bg-sky-500 py-0.5 my-0.5 mx-6 flex items-center justify-center rounded">
                {gameStart ? player2RandomChar : "Not started"}
              </div>
          </div>
          <div className="text-2xl flex justify-evenly">
              Time left till start: {`${time % 60}`.padStart(1, 0)} seconds
          </div>
          <div className="flex flex-row gap-3 justify-around">
            <button
              className="py-0.5 px-1 rounded bg-indigo-500 my-2"
              onClick={() => handleCountdownStart()}
            >
              Start
            </button>
            <button
              className="py-0.5 px-1 rounded bg-indigo-500 my-2"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
