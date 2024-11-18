import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function getTitle(pathname) {
  if (pathname === '/dark-mode') return 'Dark Mode';
  if (pathname === '/light-mode') return 'Light Mode';
  return 'Default Mode'; 
}

function Home() {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <div className={clsx('container', { 'dark-mode': pathname === '/dark-mode' })}>
      <h1>{title}</h1>
      <nav>
        <Link href="/dark-mode">
          <button>Dark Mode</button>
        </Link>
        <Link href="/light-mode">
          <button>Light Mode</button>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
