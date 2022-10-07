import { useState } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 100));
  const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 100));
  const [result, setResult] = useState("");
  const [resultMsg, setResultMsg] = useState(null);

  const checkButton = () => {
    const checkResult = firstNum + secondNum;
    console.log(result, checkResult);
    if (result == checkResult) {
      setResultMsg(true);
    } else {
      setResultMsg(false);
    }
  };

  const onChangeInput = (e) => {
    setResult(e.target.value);
  };

  const renderResultMeg = () => {
    if (resultMsg === null) {
      return null;
    }
    if (resultMsg === true) {
      return <p className="congo">Congratulations! You got it right.</p>;
    } else {
      return <p className="fail">Please Try Again!</p>;
    }
  };

  const restart = () => {
    setFirstNum(Math.ceil(Math.random() * 100));
    setSecondNum(Math.ceil(Math.random() * 100));
    setResult("");
    setResultMsg(null);
  };

  return (
    <div className="text-center">
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png"
        className="image"
        alt="img"
      />
      <div className="bg-container pt-5 pb-5">
        <span id="firstNumber" className="number m-2">
          {firstNum}
        </span>
        <span className="operator m-1">+</span>
        <span id="secondNumber" className="number m-2">
          {secondNum}
        </span>
        <span className="operator m-1">=</span>
        <input
          id="userInput"
          className="user-input"
          type="text"
          onChange={onChangeInput}
          value={result}
        />
        <div className="mt-4 mb-4">
          <button
            id="checkButton"
            className="btn btn-primary mr-3"
            onClick={checkButton}
          >
            Check
          </button>
          <button
            id="restartButton"
            className="btn btn-primary"
            onClick={restart}
          >
            Restart
          </button>
        </div>
        {renderResultMeg()}
      </div>
    </div>
  );
}

export default App;