import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { contactOperations } from './redux/phonebook'
import { useGetContactsQuery } from "./redux/phonebook/phonebookSlise";
import Container from "./сomponents/Container";
import AppBar from './сomponents/AppBar'
import ContactForm from "./сomponents/ContactForm";
import Filter from "./сomponents/Filter";
import Contacts from "./сomponents/Contacts";
import s from "./App.module.css";
import RegisterForm from "./сomponents/RegisterForm";
import LoginForm from "./сomponents/LoginForm";
import HomePage from "./сomponents/HomePage/HomePage";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { fetchContacts } from "./redux/phonebook/phonebook-operations";


const App = () => {
//  const {data, isFetching}=useGetContactsQuery('')
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(fetchCurrentUser())
  }, [dispatch])
  useEffect(()=>{dispatch(fetchContacts())},[dispatch])

  return (
    <>
     
        <Container>
          <AppBar />
          <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
          
            <Route path='/contacts' element={<><Filter/><Contacts /></>} />
             <Route path='/add' element={<ContactForm/>}/>
          </Routes>
    
        </Container>
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
