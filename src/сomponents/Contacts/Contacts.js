import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { Oval } from "react-loader-spinner";
import s from "./Contacts.module.css";




const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
console.log(contacts);
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
        <Oval
          ariaLabel="loading-indicator"
          height={50}
          width={50}
          strokeWidth={5}
          color="black"
          secondaryColor="grey"
        />
      
      <ul className={s.ContactList}>
        {contacts.length!==0&&
          contacts.map(({ id, name, phone }) => (
            <li key={id} className={s.ContactItem}>
              <p className={s.ContactData}>
                {name}: {phone}
              </p>
              <button
                onClick={() => onDeleteContact(id)}
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
