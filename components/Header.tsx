import Link from 'next/link';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      ROR2 Wiki
      <Link href="/items">Items</Link>
      <Link href="/items">Characters</Link>
      <Link href="/items">Stats</Link>
      <Link href="/items">Enemies</Link>
    </header>
  );
};

export default Header;
