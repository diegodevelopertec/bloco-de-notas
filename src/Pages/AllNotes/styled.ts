import styled from "styled-components"


export const Main=styled.main`
display:flex;
flex-wrap:wrap ;
justify-content:center;
overflow:none;
min-height: 400px;
width: 100vw;


@media screen and (max-width:920px){
    width:100vw;
   display: flex;
   align-items: flex-start;
   justify-content: center;
   min-height: 100vh;
}
`
export const ListContainer=styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-top:100px;
overflow: hidden;




@media screen and (max-width:700px){
    margin-top:20px;
    align-items:center;
  
}


`


export const ErrorMensage=styled.div`
display:flex;
text-align:center;
margin-top:150px;
justify-content:center;
opacity:0.5;


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
    height:80px;
}

@media screen and (max-width:700px){
    font-size:12px;
    height:100vh;
    margin-top:40px;


}
`
export const ContainerModal=styled.div`
padding-top:5%;
padding-bottom:2%;
display:flex;
justify-content:center;
align-items:Center;
margin-top:18%;
overflow: none;
width: 100vw;


@media screen and (max-width:600px){
padding:10px;

}
`
