import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import {Wrapper, Title, Form, Label, Input, FormBtn} from './RegisterForm.styled'


function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <Title>Sign up</Title>

      <Form onSubmit={handleSubmit}  autoComplete="off">
        <Label >
        
          <Input placeholder="Name" type="text" name="name" value={name} onChange={handleChange} />
        </Label>

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

        <FormBtn type="submit">Sign up</FormBtn>
      </Form>
    </Wrapper>
  );
}

export default RegisterForm;
