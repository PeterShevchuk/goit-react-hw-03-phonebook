import React from "react";
import PropTypes from "prop-types";

import "./Contacts.css";

const Сontacts = ({ contacts, removeContact }) => {
  return (
    <ul className="contacts__list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contacts__item">
          <span>
            {contact.name}: {contact.number}
          </span>
          <img src="https://img.icons8.com/ios-filled/26/000000/close-window.png" alt="delete" className="contacts__item-delete" onClick={() => removeContact(contact.id)} />
        </li>
      ))}
    </ul>
  );
};

export default Сontacts;

Сontacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
