import styled from 'styled-components'


export const cardContainer=styled.div`
    height:200px;
    width:300px;
    background-color: #0e082b;
    padding:10px;
    display:flex;
    flex-direction:column;
    margin: 5px;
  
    border-radius:5px;
    color:#4bb3b1;
    transition: all ease 1;

  
    :hover{
      background:#0e177d;
      color:white;
    }
    @media screen and (max-width:600px){
       
       width:80vw;
       margin:0;
       margin-top:10px;
    }
`
export const cardData=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:10px;
    margin-bottom:5px;
    font-size:10px;

    span{
        text-align:center;
    }
`

export const cardContent=styled.div`
    flex:1;
    margin-top:10px;
   
    textarea{
    width:100%;
    height: 100%;
    resize:none;
    border-radius: 6px;
    background-color: #16104a;
    padding:10px;
    overflow:none;

    }
    @media screen and (max-width:600px){
        overflow: none;
       
    }

`

export const ContainerActionsModal=styled.div`
display:flex;
justify-content: flex-end;
margin-top: 12px;
margin-bottom: 12px;

a{
    text-decoration:none;
    background-color:#eee;
    margin-left:6px;
    margin-right:6px;
     padding: 6px;
     border-radius: 5px;


     &:hover{
         background-color:#16104a;
     }
   img{
    height: 20px;
    width: 20px;
   }
}
`