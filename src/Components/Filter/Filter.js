import React from "react";
import PropTypes from "prop-types";

import "./Filter.css";

const Filter = ({ inputHeandlerFilter, filter, resetInput }) => {
  return (
    <form className="form_search">
      <label className="form_label">
        <b>Find contacts (write name or number)</b>
        <br />
        <span className="form_input">
          <input type="text" name="name" placeholder="Oleksandra or 123" value={filter} onChange={(e) => inputHeandlerFilter(e)}></input>
          {filter.length > 0 ? <img src="https://img.icons8.com/ios-filled/26/000000/close-window.png" alt="delete" onClick={resetInput} className="form__delete" /> : null}
        </span>
      </label>
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  inputHeandlerFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  resetInput: PropTypes.func.isRequired,
};
