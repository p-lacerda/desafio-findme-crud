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
    <div>
      Você deseja deletar o cliente: nomeDoCliente?

      <button type="button" onClick={() => { return deleteItem(); }}>Sim, desejo excluir</button>
      <Link passHref href="/cliente">
        <button type="button">Não, quero cancelar</button>
      </Link>
    </div>
  );
};

export default DeletarCliente;
