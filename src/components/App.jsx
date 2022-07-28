import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Container from './Container/Container';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandle = data => {
    const sameName = this.state.contacts
      .map(contact => contact.name)
      .includes(data.name);
    if (sameName) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        ...data,
        id: nanoid(),
      };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Container title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandle} />
        </Container>
        <Container title="Contacts">
          <Filter value={filter} onFilter={this.searchFilter} />

          <ContactList
            contacts={visibleContacts}
            deleteContacts={this.deleteContacts}
          />
        </Container>
      </div>
    );
  }
}
