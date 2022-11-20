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
    height:max-content;
    background-color: #0e082b;
    border-radius: 10px;
    color: #eee;
    box-shadow: 0 0 10px  #421ab0;


    @media screen and (max-width:800px){
        box-shadow: none;
        margin-top:50px;
    }

.link-register{
  
   margin: 25px 0;
   display:flex;
   align-items: center;
   justify-content: center;
   font-size: 15px;
   font-family:  Courier, monospace;
    a{
        text-decoration:none;
        width: 50%;
        border: none;
        color:#c9c4c3;
        border-radius:5px;
        transition: all ease .3s;
        &:hover{
            text-decoration: underline;
            color: #3b6f96;
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
       background-color: #421ab0;
       color:#03324a ;
       border-top-left-radius:6px;
       border-bottom-left-radius:6px;
      img{
        height: 20px;
        width: 20px;
      }
    }
    input{
        
       font-size:18px;
       border-top-right-radius:6px;
       border-bottom-right-radius:6px;
       padding: 15px;
       width: 100%;
       border: none;
       background-color: #222124;
       color: #421ab0;
       &:focus{
        outline:  2px solid #421ab0;
      }
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
       border-radius:5px;
       transition: all ease .3s;
    }
    .link:hover{
        background-color:#15bc2c;
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