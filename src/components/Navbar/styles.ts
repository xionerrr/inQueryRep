import styled from "styled-components";

export const StyledNavbar = styled.header`
    display: flex;
    justify-content: center;
`

export const NavMenu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 50px 0;
    a {
        color: #212429;
        font-size: 22px;
        text-decoration: none;
        position: relative;
        &:before {
            width: 0%;
            height: 1px;
            content: '';
            position: absolute;
            bottom: -5px;
            background: #212429;
            transition: all .2s ease;
        }
        &:hover:before {
            width: 100%;
        }
    }
`

export const Logo = styled.div`

`
