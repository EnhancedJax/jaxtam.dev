'use client';

import { useState } from 'react';
import LucideIcon from './LucideIcon';
import { usePathname } from 'next/navigation';
import { Link } from 'next/link';

function NavBar() {
    return (
        <nav id="navbar" className="fixed bottom-0 z-50 flex items-center justify-center w-screen h-16 gap-6 border-t border-cborder bg-cbg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col">
            {/* <Button to="/" icon="Home"></ Button>
            <Button to="/hkunotes" icon="PenLine"></ Button>
            <Button to="/stack" icon="Layers"></ Button>
            <Button to="/work" icon="Command"></ Button>
            <Button to="/about" icon="UserRound"></ Button> */}
        </nav>
    );
}

function Button({ to, icon }) {
    const activeColor = '#EDEDED'
    const inactiveColor = '#707070'
    const location = usePathname();
    const isActive = location.pathname === to;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link to={to} className="relative p-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <LucideIcon name={icon} size="1.5rem" color={isActive ? activeColor : inactiveColor} />
            {isHovered && (
                <div className='absolute hidden p-1 text-xs text-white transform -translate-y-1/2 border rounded-lg text-light border-cborder bg-cfg left-16 top-1/2 lg:block'>
                    <span>{to}</span>
                </div>
            )}
        </Link>
    );
}

export default NavBar;