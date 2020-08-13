import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  const [lbPage, setLbPage] = useState("0/" + totalPages);
  useEffect(() => {
    const pageCur = _page + "/" + totalPages;
    setLbPage(pageCur);
    return () => {};
  });
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
      const pageCur = (totalPages == 0 ? "0" : newPage) + "/" + totalPages;
      setLbPage(pageCur);
    }
  }
  return (
    <div style={{ margin: 10 }}>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <label style={{ margin: 10 }}>{lbPage}</label>
      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

export default Pagination;
