const AddItem = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new element"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary btn-primary button-add"
        type="button"
        id="button-addon2"
      >
        Add
      </button>
    </div>
  );
}

export default AddItem;
