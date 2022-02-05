import {  Navigate } from "react-router"
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";
function PublicRoute({ children, restricted=false }) {
    const isLoggedIn = useSelector(getIsLoggedIn)
    const shouldRedirect = isLoggedIn && restricted
   
    return shouldRedirect?<Navigate to='/contacts'/>:children
        
    
}
export default PublicRoute