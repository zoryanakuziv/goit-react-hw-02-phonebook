import React from "react";
import PropTypes from "prop-types";
const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        name="filter"
        title=""
        required
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
