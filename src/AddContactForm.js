import React , {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddContactForm extends Component
{

    state = {
            firstName : "",
            lastName : "",
            emailAddress : "",
            phoneNumber : "",
            jobTitleName : "",
            preferredFullName : ""
    }

    submitForm(e) 
    {
        e.preventDefault();
        this.props.addItem(this.state)
        console.log(this.state)
    }
    
    handleChange(event) 
    {
        const { target } = event;
        const value =  target.value;
        const { name } = target;
        this.setState({
           [name] : value,
        preferredFullName : this.state.firstName +" "+this.state.lastName });
    }

    render()
    {
        return(
            <section>
                <Form onSubmit={ (e) => this.submitForm(e) }>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="First Name"  onChange={ (e) => this.handleChange(e) }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={ (e) => this.handleChange(e) }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={ (e) => this.handleChange(e) }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="jobTitleName">Job Title</Label>
                        <Input type="text" name="jobTitleName" id="jobTitleName" placeholder="Job Title" onChange={ (e) => this.handleChange(e) }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="emailAddress">Email</Label>
                        <Input type="email" name="emailAddress" id="emailAddress" placeholder="Email" onChange={ (e) => this.handleChange(e) }/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </section>
           
        )
    }
}

export default AddContactForm;