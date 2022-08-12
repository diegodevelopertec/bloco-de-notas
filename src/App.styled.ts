import styled from 'styled-components'



export const Container=styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;



`
export const ContainerContent=styled.div`
display:flex;
justify-content:center;
height:100vh;


`

export const Main=styled.main`
background-color:#eee;
width:80vw;

@media screen and (max-width:920px){
    width:100vw;
}
`

export const Header=styled.header`
background-color:#03324a;
height50px;
padding:10px;
`