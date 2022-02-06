import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import {Fragment, Span, Btn} from './UserMenu.styled'


function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <Fragment>
      <Span >  {name} </Span>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Fragment>
  );
}

export default UserMenu;
