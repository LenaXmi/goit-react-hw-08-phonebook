import { useSelector, useDispatch } from "react-redux";
// import { contactOperations } from "../../redux/phonebook";
import {getFilter} from "../../redux/phonebook/phonebook-selectors";
import { useGetContactsQuery, useDeleteContactMutation } from "../../redux/phonebook/phonebookSlise";
import { selectAllContacts } from "../../redux/phonebook/phonebook-selectors";
import { Oval } from "react-loader-spinner";
import s from "./Contacts.module.css";




const Contacts = () => {
  const { data, isFetching } = useGetContactsQuery('');
  const [deleteContact] = useDeleteContactMutation()
  const filtered = useSelector(getFilter)

  // const contacts = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();

  // const onDeleteContact = (id) => {
  //   dispatch(contactOperations.deleteContact(id));
  // };

  const normalizedFilter = filtered.toLowerCase();
  const visibleContacts=data.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );


  return (
    <>
      {isFetching && (
        <Oval
          ariaLabel="loading-indicator"
          height={50}
          width={50}
          strokeWidth={5}
          color="black"
          secondaryColor="grey"
        />
      )}
      <ul className={s.ContactList}>
        {data &&visibleContacts&&
          visibleContacts.map(({ id, name, phone }) => (
            <li key={id} className={s.ContactItem}>
              <p className={s.ContactData}>
                {name}: {phone}
              </p>
              <button
                onClick={() => deleteContact(id)}
                className={s.ContactDelete}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;

// getVisibleContacts(contacts, filter)

// const mapStateToProps = ({ phonebook: { contacts, filter } }) => {
//   return {
//     contacts,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
