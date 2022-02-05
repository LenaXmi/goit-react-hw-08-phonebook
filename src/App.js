import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Container from "./сomponents/Container";
import AppBar from "./сomponents/AppBar";
import ContactForm from "./сomponents/ContactForm";
import Filter from "./сomponents/Filter";
import Contacts from "./сomponents/Contacts";
import s from "./App.module.css";
import RegisterForm from "./сomponents/RegisterForm";
import LoginForm from "./сomponents/LoginForm";
import HomePage from "./сomponents/HomePage/HomePage";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { fetchContacts } from "./redux/phonebook/phonebook-operations";
import PrivateRoute from "./сomponents/PrivateRoute";
import PublicRoute from "./сomponents/PublicRoute";

const App = () => {
  //  const {data, isFetching}=useGetContactsQuery('')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginForm />
              </PublicRoute>
            }
          />

          <Route
            path="/add"
            element={
              <PrivateRoute>
                <ContactForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Filter />
                <Contacts />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
