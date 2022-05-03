import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DeletarOs: NextPage = () => {
  const router = useRouter();
  const { query } = useRouter();

  const deleteItem = async () => {
    await fetch(`http://localhost:3001/ordens/${query.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    router.push('/');
  };
  return (
    <div>
      Você deseja deletar a ordem de serviço?

      <button type="button" onClick={() => { return deleteItem(); }}>Sim, desejo excluir</button>
      <Link passHref href="/">
        <button type="button">Não, quero cancelar</button>
      </Link>
    </div>
  );
};

export default DeletarOs;
