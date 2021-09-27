import { v4 as uniqId } from "uuid";
function Select({ optionsValue, defaultValue, onChange, selectedValue }) {
  return (
    <select onChange={onChange} value={selectedValue}>
      <option value="" disabled>
        {defaultValue}
      </option>
      {optionsValue.map((item) => {
        return (
          <option value={item.value} key={uniqId()}>
            {item.text}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
