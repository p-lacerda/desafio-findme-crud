import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default async function useAuthentication(): Promise<void> {
    const [data, setData] = useState({ });
    const router = useRouter();



    useEffect(() => {
      const getUserFromLocalStorage = async () => {
        const dataFromLocalStorage = await JSON.parse(localStorage.getItem('data') || '{}');
        setData(dataFromLocalStorage);
      }

      getUserFromLocalStorage();
    }, []);

    useEffect(() => {
      console.log(data);
      if (Object.keys(data).length === 0) {
        router.push('/login'); 
    }
    }, [data])
}