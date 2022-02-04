import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "../../redux/phonebook/phonebook-operations";
import { getVisibleContacts, getLoading } from "../../redux/phonebook/phonebook-selectors";
import { Oval } from "react-loader-spinner";
import s from "./Contacts.module.css";




const Contacts = () => {
    
  const isLoadingContacts = useSelector(getLoading);
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
 
 
  


  return (
    <>
      {isLoadingContacts&&<Oval
          ariaLabel="loading-indicator"
          height={50}
          width={50}
          strokeWidth={5}
          color="black"
          secondaryColor="grey"
        />}
        
      
      <ul className={s.ContactList}>
        {contacts.length===0&&<h1>You don't have any contact yet</h1>}
        {  contacts.map(({ id, name, phone }) => (
            <li key={id} className={s.ContactItem}>
              <p className={s.ContactData}>
                {name}: {phone}
              </p>
              <button
                onClick={()=>dispatch(deleteContact(id))}
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



