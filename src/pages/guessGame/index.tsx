"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

const GuessGame = () => {
  const [randomNumber, setRandomNumber] = useState<number>();
  const [input, setInput] = useState<number>(0);
  const [correctResult, setCorrectResult] = useState("");
  const [IncorrectResult, setInCorrectResult] = useState("");
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 10);
    console.log(random);
    setRandomNumber(random);
  };
  const guessNumber = () => {
    if (!input) {
      return;
    }
    if (randomNumber === input) {
      setCorrectResult("Correct !");
      setInCorrectResult("");
    } else {
      setInCorrectResult("Incorrect, continue guessing ");
      setCorrectResult("");
    }
    const lower = input > Number(randomNumber);
    const higer = Number(randomNumber) > input;

    if (lower) {
      setLow("Go lower");
      setHigh("");
    }
    if (higer) {
      setHigh("Go higher");
      setLow("");
    }
    setInput(0);
  };
  return (
    <main className="">
      <div className=" pl-10 pt-4">
        <Link to={"/"}>
          <button className="text-xl font-bold text-blue-500">Back</button>
        </Link>{" "}
      </div>
      <div className="flex justify-center items-center flex-col bg-gray-600 h-screen">
        <div className="flex flex-col justify-center text-white ">
          <p className="text-center text-green-500 font-bold text-xl">
            Rules of the game
          </p>
          <p className="text-center text-red-600 ">
            No 1 rule is that you must click on start only once to initiate the
            memory to create an a number on which your guess is based.
          </p>
          <p className="text-center text-red-600">
            No 2 rule is that you then start entering random rumbers and
            clicking on guess button upon each entry.
          </p>
        </div>
        <p className=" flex flex-col gap-2 justify-center items-center text-2xl text-white my-5">
          <span className=""> Guess a number between </span>
          <span className="">1 and 10 inclusive</span>
        </p>
        <div className=" flex flex-col justify-center gap-4">
          <div className="">
            <input
              onChange={(e) => setInput(parseInt(e.target.value))}
              type="number"
              value={input}
              className="border-2 border-gray-700 placeholder:pl-4 px-4 py-2"
              placeholder="Enter number ..."
            />
          </div>
          <div onClick={generateRandomNumber} className="flex justify-center">
            <button className="px-3 py-2 text-white bg-blue-500">
              Start Game
            </button>
          </div>
        </div>
        <div className=" my-4 text-white"></div>
        <div className="flex flex-col justify-center gap-3 items-center">
          <span className=" text-red-300">{IncorrectResult}</span>

          <span className=" text-green-400">{correctResult}</span>

          <div className=" flex flex-col gap-2 text-red-500">
            {IncorrectResult && (
              <div className="flex flex-col gap-3">
                <p className="text-center py-2">Hint</p>

                <span className="">{high}</span>
                <span className="">{low}</span>
              </div>
            )}
          </div>
        </div>
        <div onClick={guessNumber} className="flex justify-center mt-5">
          <button className="px-3 py-2 text-white bg-green-500">
            Click to Guess
          </button>
        </div>
      </div>
    </main>
  );
};

export default GuessGame;
