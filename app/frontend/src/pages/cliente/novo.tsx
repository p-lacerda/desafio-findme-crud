import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import Head from 'next/head';
import ClienteForm from '../../components/ClienteForm';

type Inputs = {
  nome: string,
};

const CadastrarCliente: NextPage = () => {
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch('http://localhost:3001/cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.push('/cliente');
  };

  return (
    <div className="py-8 px-10 w-screen max-w-5xl h-screen">
      <Head>
        <title>PredialX - Cadastro de Clientes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-semibold">Cadastrar clientes</h1>
      <ClienteForm onSubmit={onSubmit} buttonName="Cadastrar" />
    </div>
  );
};

export default CadastrarCliente;