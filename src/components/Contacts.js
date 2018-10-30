import React, { Component } from 'react'
import contacts from '../contacts'
import Card from './Card'
import Button from './Button'
import '../contact.css'
import Counter from './Counter'

class Contacts extends Component {

  state = {
    contacts: contacts,
    inputValue: ''
  }

  addRandom = () => {
    let contacts = this.state.contacts
    contacts.push({
      name: "Paquito", 
      popularity: 100
    })

    this.setState({
      contacts: contacts
    })
  }

  sortListByName = () => {
    let contacts = this.state.contacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })

    this.setState({
      contacts: contacts
    })
  }

  sortContacts = contacts => {
    return contacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    })
  }

  sortListByPopularity = () => {
    let {contacts} = this.state;

    this.setState({
      contacts: this.sortContacts(contacts)
    })
  }

  handleDeleteContact = ix =>{
    let {contacts} = this.state;
    contacts.splice(ix, 1);
    this.setState({contacts: contacts})
  }

  handleInput = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let {contacts,inputValue} = this.state
    contacts.push({
      name: inputValue
    })
    this.setState({
      contacts:contacts,
      inputValue: ''
    })
  }

  /*
  App - state-todo's

  Form - state-formulario-pasa un objeto

  Todolist
    Todo
  /Todolist
*/

  render() {
    return (
      <div>
        <form onSumbmit={this.handleSubmit}>  
          <input type='text' value={this.state.inputValue} onChange={this.handleInput} />
          <input type='submit' value='send'></input>
        </form>
        <Counter suma />
        <Button pulsado={this.addRandom}>Add random</Button>
        <Button pulsado={this.sortListByName}>Sort by name</Button>
        <Button pulsado={this.sortListByPopularity}>Sort by popularity</Button>
        <table className='contact-list'>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        {contacts.slice(0,5).map((contact, ix) => {
          return <Card
            key={ix}
            index={ix}
            data={contact}
            onDelete={this.handleDeleteContact}
          />
        })}
        </table>
      </div>
    )
  }
}

export default Contacts;