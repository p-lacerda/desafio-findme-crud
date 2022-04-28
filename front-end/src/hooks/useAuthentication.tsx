import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useAuthentication() {
    const router = useRouter();

    const getUserFromLocalStorage = async () => {
      const dataFromLocalStorage = await JSON.parse(localStorage.getItem('data') || '{}');
      return dataFromLocalStorage;
    }

    useEffect(() => {
      const data = getUserFromLocalStorage();
      
        if (!data) {
            router.push('/login'); 
        }
    }, []);
}