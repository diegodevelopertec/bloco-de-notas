import styled from 'styled-components'

type Props={
    stateInputs:boolean
}

export const cardContainer=styled.div`

    width:600px;
    background-color: #0e082b;
    padding:10px;
    display:flex;
    flex-direction:column;
    margin: 5px;
    border-radius:5px;
    color:#4bb3b1;
    transition: all ease 0.4s;
    box-shadow: 0 0 15px #3b3d45;
  
    
    :hover{
      color:white;
    }
    @media screen and (max-width:600px){
        height: 100vh;
        width: 100vw;
        margin: 0;
        border-radius: 0;
       padding-bottom: 25px;
    }
`
export const cardData=styled.div<Props>`
    display:block;
    flex-direction: column;
    align-items:flex-end;
    margin-bottom:5px;
    font-size:10px;
   

    .cx-btn-top{
        margin: 15px 0px;
        button{
                padding: 5px 10px;
                color: white;
                background-color: transparent;
                border: 0;
                border-radius: 5px;
                cursor: pointer;
                outline: 2px solid #eee;
                &:hover{
                    background-color: #16104a;
                }
            }
    }
    span{
        width: 100%;
        background-color: #16104a;
        input{
            transition: all ease 0.3s;
            width: 100%;
            background-color: ${ props=>props.stateInputs ? '#8f98b5'  : '#eeee'};
            padding: 10px ;
            border: none;
            border-radius: 5px;
     }
    }
    
`

export const cardContent=styled.div<Props>`
    flex:1;
    margin-top:10px;

 
    textarea{
        width:100%;
        height: 250px;
        resize:none;
        border-radius: 6px;
        background-color: ${props=>props.stateInputs ? '#8f98b5' : '#eeee'};
        padding:10px;
        overflow: auto;
        transition: all ease 0.3s;
   
    @media screen and (max-width:600px){
       height:95%;
    }

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

button{
    text-decoration:none;
    background-color:#eee;
    margin:5px 6px;
    text-align: center;
    display: flex;
    align-items: center;
     padding: 6px 10px;
     border-radius: 5px;
    font-weight: bold;
     transition:all ease .3s;
    border: none;
    color: #191e59;
   

     &:hover{
        background-color:#33cc52;
       
         cursor: pointer;
     }
   img{
    height: 20px;
    width: 20px;
    padding-right: 3px;
   }
}
`