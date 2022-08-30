import styled from 'styled-components'



export const Container=styled.div`
display:flex;
flex-direction:column;
width:100vw;
overflow-x:hidden;
background:white;
`

export const Header=styled.header`
background-color: #0e082b;
color:#4bb3b1;
padding:15px;
font-size:22px;
display:flex;
align-items:center;
width:100vw;
`

export const ContainerContent=styled.div`
display:flex;
justify-content:center;
flex-direction: column;
background-color: #202021;
overflow-y: auto;
@media screen and (max-width:600px){
    align-items:center;
}

`







