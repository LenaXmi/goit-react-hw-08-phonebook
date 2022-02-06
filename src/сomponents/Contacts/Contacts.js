import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/phonebook/phonebook-operations";
import {
  getVisibleContacts,
  getLoading,
} from "../../redux/phonebook/phonebook-selectors";
import { Oval } from "react-loader-spinner";
import { LoaderWrapper, Title, List, Item, Content, Btn} from './Contacts.styled'


function Contacts ()  {
  const isLoadingContacts = useSelector(getLoading);
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  return (


      <List >
        {isLoadingContacts && (
        <LoaderWrapper >
           <Oval
          ariaLabel="loading-indicator"
          height={50}
          width={50}
          strokeWidth={5}
          color="#7B68EE"
          secondaryColor="#483D8B"
        />
       </LoaderWrapper>
      )}
     {contacts?(contacts.map(({ id, name, number }) => (
          <Item key={id} >
          
              <Content >
              {name}: {number}
            </Content>
            <Btn
              onClick={() => dispatch(deleteContact(id))}
            
            >
              Delete
            </Btn>
        
            
          </Item>
        ))):(<Title>You don't have any contact yet</Title>)}

      </List>
   
  );
};

export default Contacts;
