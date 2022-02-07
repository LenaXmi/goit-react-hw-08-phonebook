import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getContacts,
  getLoading,
} from "../../redux/phonebook/phonebook-selectors";
import { addContact } from "../../redux/phonebook/phonebook-operations";

import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  FormBtn,
} from "./ContactForm.styled";

function ContactForm() {
  const initialState = { name: '', number: '' }
  const [contact, setContact]=useState(initialState)
 
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setContact((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingContact = contacts.find((addingContact) => contact.name === addingContact.name);

    if (existingContact) {
      reset();
      return toast.error(`${contact.name} is already in contacts`);
    }
   
    dispatch(addContact(contact));
    toast.success('Contact successfully added')
    reset();
  };

  const reset = () => {
  setContact(initialState)
  };
  return (
    <Wrapper>
      <ToastContainer/>
      <Title>Create new contact</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            placeholder="Name"
            autoComplete="true"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={contact.name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <Input
            placeholder="Number"
            autoComplete="true"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={contact.number}
            onChange={handleChange}
          />
        </Label>
        <FormBtn type="submit">{isLoading ? "Adding" : "Add contact"}</FormBtn>
      </Form>
    
    </Wrapper>
  );
}

export default ContactForm;
