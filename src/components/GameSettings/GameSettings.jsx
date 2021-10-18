import React from "react";
import "./GameSettings.scss";

function GameSettings({ onInputChange, inputValue, onSelectChange, disabled }) {
  return (
    <div className="settings">
      <label>
        Кто будет ходить крестиком
        <input
          type="text"
          name="X"
          disabled={disabled}
          value={inputValue["X"]}
          onChange={(e) => {
            onInputChange(e.target);
          }}
        />
      </label>

      <label>
        Кто будет ходить ноликом
        <input
          type="text"
          name="O"
          disabled={disabled}
          value={inputValue["O"]}
          onChange={(e) => {
            onInputChange(e.target);
          }}
        />
      </label>

      <label>
        Кто ходит первый
        <select
          disabled={disabled}
          onChange={(e) => {
            onSelectChange(e.target.value);
          }}
        >
          {Object.entries(inputValue).map(([sign, name]) => {
            return (
              <option value={sign} key={sign}>
                {name || sign}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

export default GameSettings;
