import type { NextPage } from 'next';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ColaboradorForm from '../../components/ColaboradorForm';

type Inputs = {
  nome: string,
  email: string,
  senha: string,
};

const CadastrarColaborador: NextPage = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch('http://localhost:3001/colaborador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.push('/colaborador');
  };
  return (
    <div>
      <Head>
        <title>PredialX - Cadastro de Colaboradores</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Cadastrar colaboradores</p>
      <div>
        <ColaboradorForm onSubmit={onSubmit} buttonName="Cadastrar" />
      </div>
    </div>
  );
};

export default CadastrarColaborador;
