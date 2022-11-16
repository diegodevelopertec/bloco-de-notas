import styled from "styled-components";

export const RegisterContainer=styled.div`
    min-height: 100vh;
    overflow:auto;
    display: flex;
    justify-content: center;
   padding-top: 100px;

`


export const FormRegister=styled.div`
width: 600px;
height: max-content;
background-color: #0e082b;
border-radius: 12px;
padding: 20px 15px;
display: flex;
flex-direction: column;
box-shadow: 0 0 10px  #421ab0;


h3{
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
}

.cx-form-register{
   display: flex;
   margin-top: 15px;
    
   
   span{
    display:flex;
    justify-content:center;
    align-items:center;
       min-width: 60px;
        text-align: center;
        padding: 10px;
        background-color: #421ab0;;
        border-top-left-radius:6px;
       border-bottom-left-radius:6px;
        img{
            width: 20px;
            height: 20px;
        }
    }
    input{
        font-size:18px;
        padding: 12px;
       border: none;
        width: 100%;
        border-top-right-radius:6px;
      border-bottom-right-radius:6px;
      background-color: #222124;
      color: #421ab0;
      &:focus{
        outline:  2px solid #421ab0;
      }
    }
}


.cx-register-btn{
    display: flex;
    justify-content: center;
   align-items: center;
   margin-top: 26px;
  
   
    

    a{
        background-color:#139c4e ;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        padding: 17px 15px;
        width: 50%;
       border-radius: 5px;
       transition: all ease .4s;
       margin-bottom:15px;
      
       &:hover{
        background-color:#15bc2c;
        
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