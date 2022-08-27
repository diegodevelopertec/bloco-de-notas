import styled from "styled-components";

export const Login=styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;


`

export const ContainerForm=styled.div`
padding: 10px;
display: flex;
flex-direction: column;
width: 600px;
background-color:#03324a;
border-radius: 10px;
color: #eee;
max-height:360px;
margin-top: 100px;
box-shadow: 0px 0px 20px rgb(73, 70, 85);


h3{
   
    margin-top: 26px;
    margin-bottom: 26px;
}
.cx-form{
 
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
    width: 100%;


    span{
       text-align: center;
        padding:10px;
      background-color: #eee;
      color:#03324a ;
    }
    input{
       padding: 10px;
       width: 100%;
       border: none;
    }




}
.cx-button{
    display: flex;
    margin-top: 30px;
    justify-content: center;
   
    a{
       width: 50%;
       display: flex;
       text-decoration: none;
       justify-content: center;
       padding: 12px 20px;
       border: none;
       color: #eee;
        background-color: green;
        border-radius:12px;

        
    }
    a:hover{
            background-color:#0a910a;
            cursor: pointer;
        }
}


@media screen and (max-width:900px){
    max-width: 90vw;
 
    h3{
      text-align: center;
      font-size: 15px;
    }
}

`