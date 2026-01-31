import React, { Component, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function ContactForm() {
    const [contactFormData, setContactFormData] = useState(
        {firstName: "",
        lastName: "",
        email: "",
        message: ""
        }
    )

    function handleChange (event) {
        const {name, value} = event.target
        setContactFormData ({...contactFormData,[name]:value})
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(contactFormData)
    }

    return (
      <>
        <Form className='form_style' onSubmit={handleSubmit}>
                <h2>Contact Me</h2>
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="firstName"
                        value={contactFormData.firstName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="lastName"
                        value={contactFormData.lastName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"
                        value={contactFormData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        type="message"
                        name="message"
                        value={contactFormData.message}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
      </>
    )
  }

export default ContactForm