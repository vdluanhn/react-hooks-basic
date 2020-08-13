import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault(); // ngan reload lại browser khi submit form
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    //reset form
    setValue("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ backgroundColor: "red", margin: 5, height: 40, padding: 3 }}
    >
      <input
        type="text"
        value={value}
        onChange={handleValueChange}
        style={{
          verticalAlign: "center",
          alignItems: "center",
          margin: 3,
          width: "98%",
        }}
      />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};
export default TodoForm;
