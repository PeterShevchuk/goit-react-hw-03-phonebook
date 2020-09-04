import React, { Fragment, Component } from "react";
import "./App.css";

import Section from "./Components/Section/Section";

// Task2
import Phonebook from "./Components/Phonebook/Phonebook";
import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filteredContacts: [],
    filter: "",
  };
  componentWillMount() {
    const getArrayContacts = localStorage.getItem("PhoneBookContacts");
    getArrayContacts ? this.setState({ contacts: JSON.parse(getArrayContacts) }) : null;
  }
  componentDidUpdate() {
    localStorage.setItem("PhoneBookContacts", JSON.stringify(this.state.contacts));
  }
  addContact = (contact) => {
    if (this.state.contacts.find((item) => item.name === contact.name)) {
      alert(`${contact.name} id already in contacts`);
      return;
    }
    this.setState((prev) => ({ contacts: [contact, ...prev.contacts] }));
  };
  inputHeandlerFilter = ({ target }) => {
    if (this.state.contacts <= 0) {
      alert("Телефонна книга пуста");
      return;
    }
    this.setState({ filter: target.value });
    const newArray = this.state.contacts.filter((contact) => contact.name.toUpperCase().includes(target.value.toUpperCase()) || contact.number.includes(target.value));
    if (newArray.length <= 0) {
      alert("За Вашим запитом нічого не знайдено");
      return;
    }
    this.setState({ filteredContacts: newArray });
  };
  removeContact = (id) => {
    this.setState((prev) => ({ contacts: prev.contacts.filter((contact) => contact.id !== id) }));
    if (this.state.filteredContacts.length > 0) {
      this.setState((prev) => ({ filteredContacts: prev.filteredContacts.filter((contact) => contact.id !== id) }));
    } else {
      this.setState({ filter: "" });
    }
  };
  resetInput = () => {
    this.setState({ filter: "" });
    this.setState({ filteredContacts: [] });
  };
  sort = (contacts) => {
    return contacts.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };
  render() {
    const { contacts, filteredContacts, filter } = this.state;
    return (
      <Fragment>
        <Section title="Phonebook">
          <Phonebook addContact={this.addContact} />
        </Section>
        <br />
        <Section title="Contacts">
          <Filter inputHeandlerFilter={this.inputHeandlerFilter} filter={filter} resetInput={this.resetInput} />
          <Contacts contacts={this.sort(filteredContacts.length > 0 ? filteredContacts : contacts)} removeContact={this.removeContact} />
        </Section>
      </Fragment>
    );
  }
}

export default App;
