import styled from 'styled-components'


export const Container=styled.div`
    display:flex;
    flex-direction:column;
    background:white;
    height: 100%;
    overflow-x: hidden;
    background-color: #3a3a63;

  `

export const Header=styled.header`
    background-color: #0e082b;
    color:#4bb3b1;
    padding:15px;
    font-size:22px;
    display:flex;
    align-items:center;
    width:100vw;
    box-shadow: 0 0 5px #eee;
`

export const ContainerContent=styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    flex-direction: column;
    background-color: #3a3a63;
    min-height: 100%;
    @media screen and (max-width:600px){
        align-items:center;
    }

`











