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
      <h1 className="font-bold text-4xl text-center mb-4">PredialX</h1>
      <div className="bg-gray-100 w-80 h-auto rounded-lg py-10 px-10 flex flex-col items-center gap-4">
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
            placeholder="seu@email.com"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            {...register('password', { required: true, minLength: 6 })}
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="********"
          />
        </label>
        <button className="btn min-w-full" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
