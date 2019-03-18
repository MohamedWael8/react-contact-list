import React, { Component } from 'react';
import Contact from './Contact';
import './ContactList.css'

class ContactList extends Component 
{
    


    render() 
    {
        const {contacts} = this.props;
        if(contacts.length < 1)
        {
          return(
          <h1>No Contacts Found</h1>
          )
        }
        else
        {
          return (
            
              <ul className="contactlist">
              {contacts.map(
                  (contact,i) => <Contact 
                                  key={i} 
                                  name={contact.preferredFullName} 
                                  phoneNumber={contact.phoneNumber}
                                  email={contact.emailAddress}
                                  jobTitleName = {contact.jobTitleName}
                                  code={contact.employeeCode}
                                  deleteContact={this.props.deleteItem}
                                  deletable = {true}/>
              )}
          </ul>
          )
        }
    }
  }
  
  export default ContactList;