import Link from 'next/link'

export default function MyHeader() {
  return (
    <header className="border border-amber-600">
        <nav className='w-full max-w-7xl py-2 px-4 mx-auto flex gap-5'>
          <Link href="/">Accueil</Link>
          <Link href="/informations">Informations</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/login">Login</Link>
        </nav>
    </header>
  );
}