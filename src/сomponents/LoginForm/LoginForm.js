import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import {Wrapper, Title, Form, Label, Input, FormBtn} from './LoginForm.styled'

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(logIn(user));
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <Title>Sign in</Title>

      <Form onSubmit={handleSubmit}  autoComplete="off">
        <Label >
        
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label >
         
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <FormBtn type="submit">Sign in</FormBtn>
      </Form>
    </Wrapper>
  );
}

export default LoginForm;
