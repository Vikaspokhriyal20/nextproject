'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';


const Header = () => {
  const [show, setShow] = useState(false);

  const pathname = usePathname();

  const handleToggle = () => {
    setShow(!show);
  }

  return (
    <header>
      <div className='container flex-nav'>
        <div className="logo">
          <h4 className='logo-text'>CODEBIT</h4>
        </div>
        <nav className={show ? "small-screen-link" : 'flex-link'}>
          <ul className='flex-link'>
            <li>
              <Link href={'/'} className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about'} className={pathname === '/about' ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link href={'/project'} className={pathname === '/project' ? 'active' : ''}>
                Project
              </Link>
            </li>
            <li>
              <Link href={'/contact'} className={pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
            <li>
              <Link href={'/docs'} className={pathname === '/docs' ? 'active' : ''}>
                Docs
              </Link>
            </li>
          </ul>
        </nav>
        <div className='menu-bar' onClick={handleToggle}>
          <p>Menu</p>
        </div>
      </div>
    </header>
    // <div className='menu-bar'><p onClick={handleToggle}>Menu</p></div>

  )
}

export default Header
