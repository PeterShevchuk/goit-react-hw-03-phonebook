import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import "./Phonebook.css";

const stateDefault = {
  name: "",
  number: "",
};

const Phonebook = ({ addContact }) => {
  const [state, setState] = useState({ ...stateDefault });

  const inputHeandler = ({ target }) => {
    const { value, name } = target;
    if (/^\s+$/.test(value) || /^\s+$/.test(name)) {
      return;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const checkContact = (e) => {
    if (state.name === "" || state.number === "") {
      alert("Заповніть поля");
      return;
    }
    e.preventDefault();
    let obj = { id: uuidv4(), name: state.name, number: state.number };
    addContact(obj);
    setState(stateDefault);
  };

  return (
    <form className="form">
      <label>
        <b>Name</b>
        <br />
        <input type="text" name="name" placeholder="Sasha Grey" value={state.name} onChange={(e) => inputHeandler(e)}></input>
      </label>
      <label>
        <b>Number</b>
        <br />
        <input type="text" name="number" placeholder="+380503456789" value={state.number} onChange={(e) => inputHeandler(e)}></input>
      </label>
      <input className="form__send" type="button" value="submit" onClick={(e) => checkContact(e)}></input>
    </form>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  addContact: PropTypes.func.isRequired,
};
