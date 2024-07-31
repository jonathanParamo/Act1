import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Stars from './Stars';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-slate-950 w-full h-20 text-white'>
      <nav className="w-full navbar relative z-10">
        {navLinks?.map(({id, title}) => (
          <Link key={id} to={title}>{title}</Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
