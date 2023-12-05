import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleButtonClick(value) {
    setInput((prev) => prev + value);
  }
  function clearInput() {
    setInput("");
  }

  function handlePlus() {
    setInput((prev) => prev + "+");
  }

  function handleEquals() {
    const result = eval(input);
    setInput(result.toString());
  }

  function handleMinus() {
    setInput((prev) => prev + "-");
  }

  function handleMultiplication() {
    setInput((prev) => prev + "*");
  }
  function handleDivision() {
    setInput((prev) => prev + "/");
  }
  function handlePercent() {
    const result = eval(input) / 100;
    setInput(result.toString());
  }
  function handlePlusMinus() {
    setInput((prev) => {
      return prev.startsWith("-") ? prev.slice(1) : "-" + prev;
    });
  }

  function handlePoint() {
    setInput((prev) => prev + ".");
  }
  return (
    <div className="container">
      <div className="zero">{input}</div>
      <div onClick={clearInput}>c</div>
      <div onClick={handlePlusMinus}>+-</div>
      <div onClick={handlePercent}>%</div>
      <div onClick={handleDivision}>/</div>
      <div onClick={() => handleButtonClick(7)}>7</div>
      <div onClick={() => handleButtonClick(8)}>8</div>
      <div onClick={() => handleButtonClick(9)}>9</div>
      <div onClick={handleMultiplication}>x</div>
      <div onClick={() => handleButtonClick(4)}>4</div>
      <div onClick={() => handleButtonClick(5)}>5</div>
      <div onClick={() => handleButtonClick(6)}>6</div>
      <div onClick={handleMinus}>-</div>
      <div onClick={() => handleButtonClick(1)}>1</div>
      <div onClick={() => handleButtonClick(2)}>2</div>
      <div onClick={() => handleButtonClick(3)}>3</div>
      <div onClick={handlePlus}>+</div>
      <div onClick={() => handleButtonClick(0)}>0</div>
      <div onClick={handlePoint}>.</div>
      <div onClick={handleEquals} className="equals">
        =
      </div>
    </div>
  );
}

export default App;
