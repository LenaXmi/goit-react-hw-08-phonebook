import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  FormBtn,
} from "./LoginForm.styled";

function LoginForm() {
  const initialState = { email: '', password: '' }
  const [loginData, setLoginData]=useState(initialState)
  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setLoginData((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(logIn(loginData));
   setLoginData(initialState)
  };

  return (
    <Wrapper>
      <Title>Sign in</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <Input
            placeholder="Email"
            autoComplete="false"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <Input
            placeholder="Password"
            autoComplete="false"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </Label>

        <FormBtn type="submit">Sign in</FormBtn>
      </Form>
    </Wrapper>
  );
}

export default LoginForm;
