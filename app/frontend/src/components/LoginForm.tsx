import React from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string,
  password: string,
};

const LoginForm: React.FC = () => {
  const router = useRouter();

  const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const {
    register, handleSubmit,
    // watch, formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=""
    >
      <label htmlFor="email">
        Email
        <input
          id="email"
          {...register('email', {
            required: true,
            pattern: {
              value: EMAIL_VALIDATION,
              message: 'O campo email é inválido',
            },
          })}
          className="input input-bordered w-full max-w-xs"
          placeholder="Seu email"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          {...register('password', { required: true, minLength: 6 })}
          type="password"
          placeholder="Sua senha"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
