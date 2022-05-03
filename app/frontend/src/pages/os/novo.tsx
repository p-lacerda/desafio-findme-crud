import type { NextPage } from 'next';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import Head from 'next/head';
import OsForm from '../../components/OsForm';

type Inputs = {
  clienteId: number,
  problemaRelatado: string,
  colaboradorId: number,
};

const CadastrarOs: NextPage = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch('http://localhost:3001/ordens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.push('/');
  };
  return (
    <div>
      <Head>
        <title>PredialX - Cadastro de Ordens de Serviço</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-8 px-10 w-screen max-w-5xl h-screen">
        <h1 className="text-3xl font-semibold">Cadastrar Ordens de Serviço</h1>
        <p className="text-gray-400">*Ids de cliente e colaborador precisam ser existentes</p>

        <OsForm onSubmit={onSubmit} buttonName="Cadastrar" />
      </div>
    </div>
  );
};

export default CadastrarOs;
