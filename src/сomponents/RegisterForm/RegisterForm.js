import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  FormBtn,
} from "./RegisterForm.styled";

function RegisterForm() {
  const initialState = { name: '', email: '', password: '' }
  const [registerData, setRegisterData]=useState(initialState)
  const dispatch = useDispatch();


  const handleChange = (e) => {
  const { name, value } = e.currentTarget;
      setRegisterData((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(registerData));
  setRegisterData(initialState)
  };

  return (
    <Wrapper>
      <Title>Sign up</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <Input
            placeholder="Name"
            autoComplete="false"
            type="text"
            name="name"
            value={registerData.name}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <Input
            placeholder="Email"
            autoComplete="false"
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <Input
            placeholder="Password"
            autoComplete="false"
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
        </Label>

        <FormBtn type="submit">Sign up</FormBtn>
      </Form>
    </Wrapper>
  );
}

export default RegisterForm;
