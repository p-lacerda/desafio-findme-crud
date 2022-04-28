import React, { useState } from 'react';
import { useRouter } from 'next/router';

type Props = {};

const Form = (props: Props): JSX.Element => {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    router.push('/');
    localStorage.setItem('data', JSON.stringify(data))
  }

  const onChange = (event: { target: HTMLInputElement }) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
    
  }

  const { email, password } = data;

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          value={email}
          onChange={(event) => onChange(event)}
          type="text"
          placeholder="Seu email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          name="password"
          value={password}
          onChange={(event) => onChange(event)}
          type="password"
          placeholder="Sua senha"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

export default Form;