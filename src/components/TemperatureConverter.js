import React from "react";
import { useState, useEffect } from "react";

const TemperatureConverter = () => {
  const [input, setInput] = useState("0");
  const [conversion, setConversion] = useState("celsiusToFahrenheit");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInput(Number(event.target.value));
  };

  const handleSelectChange = (event) => {
    setConversion(event.target.value);
  };

  useEffect(() => {
    if (conversion === "celsiusToFahrenheit") {
      setResult((input * 9) / 5 + 32);
    } else {
      setResult((input - 32) * 5 / 9);
    }
  }, [input, conversion])

  return (
    <section>
      <h2>Temperature Converter</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter temperature"
      />
      <label htmlFor="conversion-select">Choose a conversion type:</label>
      <select
        id="conversion-select"
        value={conversion}
        onChange={handleSelectChange}
      >
        <option value="celsiusToFahrenheit">Celsius to Fahrenheit</option>
        <option value="fahrenheitToCelsius">Fahrenheit to Celsius</option>
      </select>

      <div>{result}</div>
    </section>
  );
};
export default TemperatureConverter;
