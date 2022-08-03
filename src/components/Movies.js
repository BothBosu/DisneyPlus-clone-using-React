import React from 'react'
import styled from 'styled-components'
import Movie from './Movie'

function Movies() {
    return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Movie to="detail-doctor-strange-in-the-multiverse-of-madness" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
            <Movie to="detail-doctor-strange-in-the-multiverse-of-madness" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
            <Movie to="detail-doctor-strange-in-the-multiverse-of-madness" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
            <Movie to="detail-doctor-strange-in-the-multiverse-of-madness" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9406/1289406-v-bd22a29f0585" />
        </Content>
        <h4>New to Disney+ Hotstar</h4>
        <Content>
            <Movie to="detail-loki" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
            <Movie to="detail-loki" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
            <Movie to="detail-loki" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
            <Movie to="detail-loki" poster="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8531/1308531-v-2189dd88b952" />
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