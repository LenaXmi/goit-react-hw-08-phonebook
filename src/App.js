import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactOperations } from './redux/phonebook'
import { useGetContactsQuery } from "./redux/phonebook/phonebookSlise";
import Container from "./сomponents/Container";
import Form from "./сomponents/Form";
import Filter from "./сomponents/Filter";
import Contacts from "./сomponents/Contacts";
import s from "./App.module.css";


const App = () => {
 const {data, isFetching}=useGetContactsQuery('')
//   const dispatch = useDispatch()

//   useEffect(() => {
//   dispatch(contactOperations.fetchContacts())
// },[dispatch])

  return (
    <>
      {data && !isFetching ?
        (<Container>
          <h1 className={s.Title}>Phonebook</h1>
          <Form />
          <h2 className={s.Title}>Contacts</h2>
          <Filter />
          <Contacts />
        </Container>) : ('Loading...')}
    </>

  );
};

export default App;



//Class component without hooks

// class App extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: '',
//   };

//   formSubmitHandler = formData => {
//     const { name } = formData;
//     const { contacts } = this.state;
//     const existingContact = contacts.find(contact => name === contact.name);
//     if (existingContact) {
//       return alert(`${name} is already in contacts`);
//     }
//     this.setState(prevState => ({
//       contacts: [formData, ...prevState.contacts],
//     }));
//   };

//   changeFilter = e => {
//     const { value } = e.currentTarget;
//     this.setState({
//       filter: value,
//     });
//   };
//   findContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizeContacts = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeContacts),
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({
//         contacts: parsedContacts,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   render() {
//     const visibleContacts = this.findContact();

//     return (
//       <Container>
//         <h1 className={s.Title}>Phonebook</h1>
//         <Form submit={this.formSubmitHandler} />
//         <h2 className={s.Title}>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <Contacts
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }
