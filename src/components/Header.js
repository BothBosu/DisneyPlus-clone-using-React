import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        <NavMenu>
            <a href="">
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
            </a>
            <a href="">
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
            </a>
            <a href="">
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </a>
            <a href="">
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
            </a>
            <a href="">
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
            </a>
            <a href="">
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src="https://siamblockchain.com/wp-content/uploads/2021/12/9B5EC7A7-7A7E-4ECA-878D-DF40D91371D6.jpeg"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    /* position: sticky;
    top: 0; */
    height: 70px;
    background: #090b13;
    display: flex;
    padding: 0 36px;
    align-items: center;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    margin-left: 25px;
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;
        color: white;
        img {
            height: 20px;
        }
        span {
            font-size: 12px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    margin-left: auto;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`