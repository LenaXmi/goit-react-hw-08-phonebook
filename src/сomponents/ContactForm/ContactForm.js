
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";
import { addContact } from "../../redux/phonebook/phonebook-operations";
import s from "./ContactForm.module.css";

function ContactForm() {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
  
    if (name === "name") {
      setName(value);
    }
    if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingContact = contacts.find((contact) => name === contact.name);

    if (existingContact) {
      reset()
      return alert(`${name} is already in contacts`);
    }
    const contact={name, number}
    dispatch(addContact( contact));
    reset();
  };

  const reset = () => {
  
    setName("");
    setNumber("");
  };
  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <label className={s.Label}>
        Name
        <input
          className={s.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.Label}>
        Number
        <input
          className={s.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={s.FormBtn} type="submit" >
        Add contact
        {/* {isLoading?'Adding':'Add contact'} */}
        
      </button>
    </form>
  );
}

export default ContactForm;

