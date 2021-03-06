import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { Header } from './AppBar.styled';

 function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
   return (
     <Header>
       <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>

  );
 }


export default AppBar