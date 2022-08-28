import styled from "styled-components";

export const RegisterContainer=styled.div`
width: 100vw;
height:100vh;
overflow:hidden;
display: flex;
justify-content: center;

`


export const FormRegister=styled.div`
margin-top: 130px;
width: 600px;
height: 330px;
background-color: #0e082b;
border-radius: 12px;
padding: 10px;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 20px rgb(73, 70, 85);


h3{
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
}

.cx-form-register{
   display: flex;
   margin-top: 12px;
    
   
   span{
   
       min-width: 60px;
        text-align: center;
        padding: 10px;
        background-color: #aaa;
    }
    input{
        padding: 10px;
       border: none;
        width: 100%;
    }
}


.cx-register-btn{
    display: flex;
    justify-content: center;
   align-items: center;
   margin-top: 26px;
   
    

    a{
        background-color: green;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        padding: 10px 15px;
        width: 50%;
       border-radius: 12px;
     
    }
}
@media screen and (max-width:800px) {
    width: 86vw;
    span{
        width: auto;
    }
}


`