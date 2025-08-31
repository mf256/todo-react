import { useState } from "react";

const Input = (props) => {
  const {onAdd} = props;
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new element"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        onKeyPress={(event) => event.key === 'Enter' ? onAdd(inputValue) : null}
      />
      <button
        className="btn btn-outline-secondary btn-primary button-add"
        type="button"
        id="button-addon2"
        onClick={() => onAdd(inputValue)}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
