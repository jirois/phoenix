import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};

    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}


`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    font-weight: thin;
    cursor: pointer;
    outline: none;

`

export const SidebarWrapper = styled.div`
    display: grid;
    place-items: center;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    text-align: center;
    margin-top: 3.5rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 50px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #ffb300;
    }
`
export const SidebarBtnWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
`

export const SidebarRouter = styled(LinkR)`
    border-radius: 50px;
    background: #ffb300;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    border: none;
    outline: none;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    margin-bottom: 10px;


    &:hover {
        transition: all 0.2s ease-in-out;
        color: #ffb300;
        background: #fff;
    }
`


