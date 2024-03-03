'use client';
import styled from "styled-components";
import Link from "next/link";
const NavItem = styled.div`
    display: inline;
    padding: 10px;
`;

const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left:0;
    background-color: #512B81;
`
const NavLinks = styled.a`
    color: #4477CE;
    text-decoration: none;
    
`;

export default function NavBar(){
    return (
        <nav>
        <NavList>
            <NavItem><Link href="/home">Home</Link></NavItem>
            <NavItem><Link href="/about">About</Link></NavItem>
            <NavItem><Link href="/projects">Projects</Link></NavItem>
        </NavList>
        </nav>
    );
}