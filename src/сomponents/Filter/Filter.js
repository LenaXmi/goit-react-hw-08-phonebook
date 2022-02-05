import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { getFilter, getContacts } from "../../redux/phonebook/phonebook-selectors";
import {Wrapper, Title, Label, Input} from './Filter.styled'

function Filter ()  {
  const value = useSelector(getFilter);
  const contacts=useSelector(getContacts)
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <Wrapper>
      {contacts.length===0?(<Title>You don't have any contact yet</Title>):( <Label>
      <Input
        placeholder='Find contact'
        type="text"
        value={value}
        onChange={onChange}
      />
    </Label>)}
  
    </Wrapper>
 
  );
};

export default Filter;

