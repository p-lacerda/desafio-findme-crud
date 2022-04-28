import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default async function useAuthentication(): Promise<void> {
    const router = useRouter();


    const getUserFromLocalStorage = () => {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem('data') || '{}');
      return dataFromLocalStorage;
    }

    const data = getUserFromLocalStorage();

    useEffect(() => {
      if (Object.keys(data).length === 0) {
        router.push('/login'); 
      }
    }, []);
}