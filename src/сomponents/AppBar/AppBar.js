import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { Header } from './AppBar.styled';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };
 function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
   return (
     <Header>
       <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
    // <header >
    //   <Navigation />
    //       {isLoggedIn ? <UserMenu /> : <AuthNav />}
        
    // </header>
  );
 }


export default AppBar