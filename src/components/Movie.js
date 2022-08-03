import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Movie({to, poster}) {
  return (
    <Wrap>
        <Link to={to}>
            <img src={poster} />
        </Link>
    </Wrap>
  )
}

export default Movie

const Wrap = styled.div`
    border-radius: 10px; 
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 60%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        /* height: 300px; */
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.15);
        border-color: rgba(249, 249, 249, 0.8);
    }
`