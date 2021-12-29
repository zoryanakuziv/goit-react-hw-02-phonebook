import { Component } from "react";
import Container from "./components/container/Container";
import Form from "./components/form/Form";
import Filter from "./components/filter/Filter";
import ContactList from "./components/contacts/Contacts";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmitHandler = (data) => {
    if (this.state.contacts.find((contact) => contact.name === data.name)) {
      alert(
        `${data.name} is already in contacts with a contact number: ${data.number} `
      );
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [data, ...contacts] }));
  };

  filterHandler = (filter) => {
    this.setState({ filter });
  };
  deleteContact = (deletedId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== deletedId
      ),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter filter={this.state.filter} onChange={this.filterHandler} />
        <ContactList
          contacts={this.filteredContacts()}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
