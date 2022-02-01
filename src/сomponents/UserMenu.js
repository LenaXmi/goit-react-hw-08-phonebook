import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../redux/auth/auth-selectors';
import { logOut } from '../redux/auth/auth-operations';
// import { authSelectors, authOperations } from '../../redux/auth';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);


  return (
    <div style={styles.container}>
     
          <span style={styles.name}>Добро пожаловать {name} </span>
      <button type="button" onClick={()=>dispatch(logOut())} >
        Log Out
      </button>
    </div>
  );
}