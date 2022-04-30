import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  email: string,
  password: string,
};

const LoginForm = (props: Props): JSX.Element => {
  const router = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    localStorage.setItem('data', JSON.stringify(data))
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Email
        <input
          id="email"
          {...register("email", { required: true })}
          placeholder="Seu email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          {...register("password", { required: true })}
          type="password"
          placeholder="Sua senha"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;