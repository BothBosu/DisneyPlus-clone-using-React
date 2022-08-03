import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <SignUp>    
                    GET ALL THERE   
                </SignUp>
            </Link>
            <Description>
            Hotstar has been discontinued in the US, but you can enjoy LIVE cricket, your favorite Indian entertainment, & more with The Disney Bundle (Disney+, Hulu, and ESPN+). If you had a Hotstar subscription before it was discontinued, please check your email for details.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    /* align-items: center; */
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        background-size: cover;
        opacity: 0.7;
        /* background-position: top; */
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 850px;
    /* max-width: 650px; */
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.div`
    width: 50vw;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`