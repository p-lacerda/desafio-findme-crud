import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DeletarCliente: NextPage = () => {
  const router = useRouter();
  const { query } = useRouter();

  const deleteItem = async () => {
    await fetch(`http://localhost:3001/cliente/${query.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    router.push('/cliente');
  };
  return (
    <div className="py-8 px-10 w-screen max-w-5xl h-screen">
      <h1 className="text-3xl font-semibold">Você deseja deletar o cliente?</h1>

      <div className="mt-4 flex flex-row gap-2">
        <button type="button" className="btn bg-gray-900" onClick={() => { return deleteItem(); }}>Sim, desejo excluir</button>
        <Link passHref href="/cliente">
          <button className="btn btn-error bg-transparent" type="button">Não, quero cancelar</button>
        </Link>
      </div>
    </div>
  );
};

export default DeletarCliente;
