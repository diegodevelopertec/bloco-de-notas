import styled from "styled-components";

export const Login=styled.div`
height: 100vh;
display: flex;
justify-content: center;
margin-top: 90px;




@media screen  and (max-width:920px){
    
    height:100vh;
    width:100vw;
}


`

export const ContainerForm=styled.div`
padding: 15px;
display: flex;
flex-direction: column;
width: 600px;
height:400px;
background-color: #0e082b;
border-radius: 10px;
color: #eee;
box-shadow: 0px 0px 5px #3d5a8a;


@media screen and (max-width:800px){
    box-shadow: none;
    margin-top:50px;
}

.link-register{
  
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
  
 


a{
    text-decoration:none;
    width: 50%;
    display: flex;
    justify-content: center;
    padding: 12px;
    border: none;
    color:white;
    background-color:#607ca8;
    box-shadow: 5px 5px #3d5a8a;
    border-radius:12px;
    transition: all ease .3s;

    &:hover{
        background-color:#689bed;
       box-shadow: 5px 5px #5282d1;
     
    }
}
}

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
        width:70px;
        display:flex;
    justify-content:center;
    align-items:center;
       text-align: center;
        padding:10px;
      background-color: #eee;
      color:#03324a ;
      border-top-left-radius:6px;
      border-bottom-left-radius:6px;
      img{
        height: 20px;
        width: 20px;
      }
    }
    input{
        color:#b1b3b5;
        font-size:18px;
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
       padding: 15px;
       width: 100%;
       border: none;
    }

}
.cx-button{
    display: flex;
    margin-top: 35px;
    justify-content: center;
   
    .link{
       width: 50%;
       display: flex;
       text-decoration: none;
       justify-content: center;
       padding: 12px 20px;
       border: none;
       color: #eee;
       background-color:#139c4e ;
    box-shadow: 5px 5px #127a3f ;
        border-radius:12px;
        transition: all ease .3s;
        
    }
    .link:hover{
        background-color:#15bc2c;
    box-shadow: 5px 5px #137d21;
            cursor: pointer;
        }


        
}


@media screen and (max-width:920px){
    max-width: 90vw;
    margin-top:0;
 
    h3{
      text-align: center;
      font-size: 15px;
    }
}

`