import styled from 'styled-components'



export const Container=styled.div`
display:flex;
flex-direction:column;
width:100%;
`

export const Header=styled.header`
background-color:#03324a;
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


export const ErrorMensage=styled.div`
display:flex;
text-align:center;
margin-top:150px;
width:100vw;
justify-content:center;

h3{
    color:#787d7b;
    display:flex;
    justify-content:center;
    align-items:center;
   }

img{
    
    background-color:orange;
    padding:10px;
    border-radius:5px;
    margin-left:12px;
    box-shadow:0 0 10px blue;
    height:80px;
}

@media screen and (max-width:700px){
    font-size:12px;
    height:100vh;
    margin-top:40px;


}
`
