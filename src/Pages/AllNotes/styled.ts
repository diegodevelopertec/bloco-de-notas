import styled from "styled-components"


export const Main=styled.main`
    display:flex;
    flex-wrap:wrap ;
    justify-content:center;
    min-height: 100vh;
    padding-bottom: 150px;
    
@media screen and (max-width:920px){
    width:100vw;
   display: flex;
   align-items: flex-start;
   justify-content: center;
   min-height: 100vh;
}
`
type Prop={
    opacityCondition:boolean
}
export const ListContainer=styled.div<Prop>`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-top:100px;
overflow: hidden;
opacity:${props=>props.opacityCondition ? '0.5' : '1'};




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
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color:18, 18, 18;
   
`