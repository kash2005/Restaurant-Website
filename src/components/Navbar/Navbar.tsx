import React from 'react';
import Logo from "../../assets/logo.png";
import { IoCartOutline } from 'react-icons/io5';
import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

interface NavMenuItem {
    id: number;
    title: string;
    path: string;
    delay: number;
}

const NavMenu: NavMenuItem[] = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        delay: 0.1,
    },
    {
        id: 2,
        title: 'About',
        path: '/about',
        delay: 0.2,
    },
    {
        id: 3,
        title: 'Menu',
        path: '/menu',
        delay: 0.3,
    },
    {
        id: 4,
        title: 'Delivery',
        path: '/delivery',
        delay: 0.4,
    },
    {
        id: 5,
        title: 'Contact Us',
        path: '/contact',
        delay: 0.5,
    },
];


const SlideDown = (delay: number): Variants => {
    return {
        initial: {
            y: "-100%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            },
        },
    };
};

const Navbar: React.FC = () => {
  return (
    
  );
}

export default Navbar;
