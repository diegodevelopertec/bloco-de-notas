import styled from "styled-components";

export const Login=styled.div`
height: 100vh;
display: flex;
justify-content: center;





`

export const ContainerForm=styled.div`
padding: 15px;
display: flex;
flex-direction: column;
width: 600px;
height: 350px;
background-color: #0e082b;
border-radius: 10px;
color: #eee;

margin-top: 100px;
box-shadow: 0px 0px 20px rgb(73, 70, 85);

.link-register{
    margin-top: 16px;
    margin-bottom: 16px;
display: flex;
justify-content: center;


a{
    color: white;
    text-decoration: none;
    &:hover{
        color: #362b6e;
        text-decoration: underline;
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
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
       padding: 10px;
       width: 100%;
       border: none;
    }

}
.cx-button{
    display: flex;
    margin-top: 35px;
    justify-content: center;
   
    a{
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

        
    }
    a:hover{
        background-color:#15bc2c;
    box-shadow: 5px 5px #137d21;
            cursor: pointer;
        }

}


@media screen and (max-width:915px){
    max-width: 90vw;
    margin-top: 150px;
 
    h3{
      text-align: center;
      font-size: 15px;
    }
}

`