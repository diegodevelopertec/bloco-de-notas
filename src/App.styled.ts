import styled from 'styled-components'



export const Container=styled.div`
display:flex;
flex-direction:column;
background-color:#beccc9;


`

export const Header=styled.header`
background-color:#03324a;
color:#4bb3b1;
padding:15px;
font-size:22px;
display:flex;
align-items:center;
position:fixed;
width:100%;
margin-bottom:5%;
`

export const ContainerContent=styled.div`
display:flex;
justify-content:center;
margin-top:10px;

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
padding-top:5%;
padding-bottom:2%;
display:flex;
justify-content:center;
align-items:Center;
margin-top:18%;
@media screen and (max-width:600px){
padding:10px;

}
`
type Props={
opacity:string;
}
export const ListContainer=styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-top:100px;



@media screen and (max-width:700px){
    margin-top:20px;
}


`

