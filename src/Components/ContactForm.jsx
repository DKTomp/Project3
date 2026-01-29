import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class ContactForm extends Component {
    render() {
    return (
      <>
        <Form className='form_style'>
                <h2>Contact Me</h2>
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="firstName"
                         
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="tlastName"
                        
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        name="lastname"
                        
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        type="message"
                        name="message"
                        
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
      </>
    )
  }
}

export default ContactForm