import React, { useState } from 'react';

function App() {
  const [electricityPrice, setElectricityPrice] = useState<number>(0);
  const [electricityConsumption, setElectricityConsumption] = useState<number>(0);
  const [usageTime, setUsageTime] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const calculateCost = () => {
    const cost = (electricityPrice * electricityConsumption * usageTime) / 100;
    setTotalCost(cost);
  };

  return (
    <div className="App">
      <h1>Sähkökustannuslaskuri</h1>
      <div className="input-container">
        <label htmlFor="electricityPrice">Sähkönhinta (per kWh):</label>
        <input
          type="number"
          id="electricityPrice"
          value={electricityPrice}
          onChange={(e) => setElectricityPrice(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="electricityConsumption">Sähkönkulutus (kWh):</label>
        <input
          type="number"
          id="electricityConsumption"
          value={electricityConsumption}
          onChange={(e) => setElectricityConsumption(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="usageTime">Käyttöaika (tunteina):</label>
        <input
          type="number"
          id="usageTime"
          value={usageTime}
          onChange={(e) => setUsageTime(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateCost}>Laske hinta</button>
      {totalCost !== null && (
        <div className="result">
          <p>Kokonaishinta: {totalCost.toFixed(2)}€</p>
        </div>
      )}
    </div>
  );
}

export default App;