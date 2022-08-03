import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
            </Wrap>
        </Content>
        <h4>New to Disney+ Hotstar</h4>
        <Content>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 25px;
    
`

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