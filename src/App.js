import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [startTimer, setStartTimer] = useState(0);
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
    //handleStop();
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
            setPlayer1RandomChar(
              ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
            );
            setPlayer2RandomChar(
              ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
            );
            //handleStart();
            clearInterval(timer);
            return 0;
          } else return time - 1;
        });
      }, 1000);
    }
  }, [startTimer]);

  function handleCountdownStart() {
    setStartTimer(1);
  }

  return (
    <div className="App">
      <div className="h-screen flex flex-col justify-center items-center gap-3">
        <div className="container border-4">
          <div className="flex flex-row gap-3 justify-evenly">
            <div>
              <p className={`${player1Won} bg-sky-500 px-2 py-0.25 my-0.5`}>
                {" "}
                Player 1
              </p>
            </div>
            <div>
              <p className={`${player2Won} bg-sky-500 px-2 py-0.25 my-0.5`}>
                {" "}
                Player 2
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-evenly">
            <div>
              <p className="bg-sky-500 px-2 py-0.25 my-0.5">
                {player1RandomChar}
              </p>
            </div>
            <div>
              <p className="bg-sky-500 px-2 py-0.25 my-0.5">
                {player2RandomChar}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3 justify-evenly">
            <p>
              Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
              {`${time % 60}`.padStart(2, 0)}
            </p>
          </div>
          <div className="flex flex-row gap-3 justify-evenly">
            <button
              className="py-0.5 px-1 rounded bg-indigo-500 mx-1"
              onClick={() => handleCountdownStart()}
            >
              Start
            </button>
            <button
              className="py-0.5 px-1 rounded bg-indigo-500"
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
