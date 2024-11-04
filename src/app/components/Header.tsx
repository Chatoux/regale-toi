import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-medium">Regale Toi</h1>
        <nav className="flex space-x-4">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/services"><a className="hover:underline">Services</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
        </nav>
      </div>
    </header>
  );
}