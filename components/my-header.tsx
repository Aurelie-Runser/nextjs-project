import Link from 'next/link'
import { getServerSession } from "next-auth";

export default async function MyHeader() {
  const session = await getServerSession();

  return (
    <header className="border border-amber-600">
      <nav className='w-full max-w-7xl py-2 px-4 mx-auto flex gap-5'>
        <Link href="/">Accueil</Link>
        <Link href="/informations">Informations</Link>
        <Link href="/contact">Contact</Link>

        {session ? (<>
          <Link href="/admin">Admin</Link>
          <Link href="/admin/cocktails-edit">Edition - Cocktails</Link>
          <Link href="/admin/timetables-edit">Edition - Horaires</Link>
        </>) : (<>
          <Link href="/login">Login</Link>
        </>)}    
      </nav>
    </header>
  );
}