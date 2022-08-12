import styled from 'styled-components'



export const Container=styled.div`
display:flex;
flex-direction:column;




`

export const Header=styled.header`
background-color:#03324a;
height:50px;
color:white;
padding:10px;
`

export const ContainerContent=styled.div`
display:flex;
justify-content:center;
width:100%;


`

export const Main=styled.main`
display:flex;
flex-wrap:wrap ;
justify-content:center;


@media screen and (max-width:920px){
    width:100vw;
}
`




export const ContainerModal=styled.div`
padding-top:2%;
padding-bottom:2%;
display:flex;
justify-content:center;
align-items:Center;
margin-top:10%;
@media screen and (max-width:600px){
padding:10px;

}
`

export const ListContainer=styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-top:80px;

@media screen and (max-width:700px){
    margin-top:20px;
}


`

