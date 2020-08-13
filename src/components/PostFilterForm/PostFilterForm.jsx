import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(e.target.value);
    console.log(searchTerm);

    if (onSubmit) {
      //neu onSubmit co gia tri - duoc thuc hien
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        const formValues = { searchTerm: value };
        onSubmit(formValues);
      }, 300);
    }
  }
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        style={{ width: "90%" }}
      />
    </form>
  );
}

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = { onSubmit: null };
export default PostFilterForm;
