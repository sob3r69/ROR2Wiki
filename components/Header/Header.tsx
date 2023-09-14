import Link from 'next/link';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link href="/">ROR2 Wiki</Link>
      <Link href="/items">Items</Link>
      <Link href="/items">Characters</Link>
      <Link href="/items">Stats</Link>
      <Link href="/items">Enemies</Link>
    </header>
  );
};

export default Header;
