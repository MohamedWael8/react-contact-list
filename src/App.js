import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component 
{
  state =
  {
      contacts: [
          {
            "userId": "rirani",
            "jobTitleName": "Developer",
            "firstName": "Romin",
            "lastName": "Irani",
            "preferredFullName": "Romin Irani",
            "employeeCode": "E1",
            "region": "CA",
            "phoneNumber": "408-1234567",
            "emailAddress": "romin.k.irani@gmail.com"
          },
          {
            "userId": "nirani",
            "jobTitleName": "Developer",
            "firstName": "Neil",
            "lastName": "Irani",
            "preferredFullName": "Neil Irani",
            "employeeCode": "E2",
            "region": "CA",
            "phoneNumber": "408-1111111",
            "emailAddress": "neilrirani@gmail.com"
          },
          {
            "userId": "thanks",
            "jobTitleName": "Program Directory",
            "firstName": "Tom",
            "lastName": "Hanks",
            "preferredFullName": "Tom Hanks",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "408-2222222",
            "emailAddress": "tomhanks@gmail.com"
          }
    
        ]
  }


  deleteContact = (code) =>
  {
      this.setState(
        {
          contacts : this.state.contacts.filter(contact => contact.employeeCode != code)
        });

      console.log(this.state.contacts);
  }

  addContact = (contact) =>
  {
    this.setState(
      {
      contacts : [...this.state.contacts, contact]
      });
  }

  render() 
  {

    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ContactList contacts={this.state.contacts} deleteItem={this.deleteContact}/>
            </div>
            <div className="col-sm-4">
              <AddContactForm addItem={this.addContact}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
