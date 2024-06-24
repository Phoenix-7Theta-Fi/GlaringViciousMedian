import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link href="/home">Home</Link>
      <Link href="/appointments">Appointments</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
};

export default NavBar;
