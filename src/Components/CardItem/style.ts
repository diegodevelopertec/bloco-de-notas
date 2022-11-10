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
    transition: all ease .4s;
    box-shadow: 0 0 15px #eee;
  
    :hover{
      color:white;
    }
    @media screen and (max-width:600px){
       
       width:80vw;
       margin:0;
       margin-top:10px;
    }
`
export const cardData=styled.div<Props>`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:10px;
    margin-bottom:5px;
    font-size:10px;
    padding: 15px 0;

    span{
        width: 100%;
        background-color: #16104a;
        input{
            transition: all ease 0.3s;
            width: 100%;
            background-color:  ${props=>props.stateInputs ? '#16104a' : '#eeee'};
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
    background-color: ${props=>props.stateInputs ? '#16104a' : '#eeee'};
    padding:10px;
    overflow:auto;
    transition: all ease 0.3s;

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
     padding: 6px;
     border-radius: 5px;
     box-shadow:2px 2px 0 #13356b;
     transition:all ease .3s;
    border: none;
    color: white;
    background-color: #244882;


     &:hover{
        background-color:#33cc52;
        box-shadow: 2px 2px 0 #186b27;
         cursor: pointer;
     }
   img{
    height: 20px;
    width: 20px;
    padding-right: 3px;
   }
}
`