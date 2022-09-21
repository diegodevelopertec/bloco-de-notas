import styled from "styled-components";

export const RegisterContainer=styled.div`
height:100vh;
padding: 15px;
overflow:auto;
display: flex;
justify-content: center;


`


export const FormRegister=styled.div`
margin-top: 130px;
width: 600px;
height: 350px;
background-color: #0e082b;
border-radius: 12px;
padding: 10px;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 5px #3d5a8a;


h3{
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
}

.cx-form-register{
   display: flex;
   margin-top: 12px;
    
   
   span{
    display:flex;
    justify-content:center;
    align-items:center;
       min-width: 60px;
        text-align: center;
        padding: 10px;
        background-color: #aaa;
        border-top-left-radius:6px;
       border-bottom-left-radius:6px;
        img{
            width: 20px;
            height: 20px;
        }
    }
    input{
        color:#b1b3b5;
        font-size:18px;
        padding: 15px;
       border: none;
        width: 100%;
        border-top-right-radius:6px;
      border-bottom-right-radius:6px;
    }
}


.cx-register-btn{
    display: flex;
    justify-content: center;
   align-items: center;
   margin-top: 26px;
   margin-bottom:50px;
   
    

    a{
        background-color:#139c4e ;
    box-shadow: 5px 5px #127a3f ;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        padding: 10px 15px;
        width: 50%;
       border-radius: 12px;
       transition: all ease .4s;
       margin-bottom:15px;

       &:hover{
        background-color:#15bc2c;
        box-shadow: 5px 5px #137d21;;
       }
    }
}
@media screen and (max-width:800px) {
    width: 86vw;
    span{
        width: auto;
    }
}


`