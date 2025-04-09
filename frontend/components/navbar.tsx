"use client"

import React from 'react'
import { Button } from './ui/button'
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

function Navbar() {
    const router = useRouter();
    const handleLogout = () => {
        deleteCookie('token');
        router.push('/login');
    }
  return (
    <Button onClick={handleLogout}>logout</Button>
  )
}

export default Navbar