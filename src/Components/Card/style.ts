import styled from 'styled-components'


export const cardContainer=styled.div`
    height:270px;
    background-color: #0e082b;
    padding: 15px 10px;
    display:flex;
    flex-direction:column;
    margin: 5px;
    border-radius:5px;
    color:#cccdcf;
    transition: all ease .4s;
    &:hover{
        background-color:#221557;
      color:white;
      textarea{
        color: white;
      }
    }
    @media screen and (max-width:600px){
       
       width:auto;
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
    width: 100%;

    span{
        text-align:center;
    }
`

export const cardContent=styled.div`
    flex:1;
    margin-top:10px;
 
    textarea{
    height: 100%;
    width: 100%;
    resize:none;
    border-radius: 6px;
    background-color: initial;
   // background-color: #16104a;
    padding:10px;
    overflow:hidden;
    outline:0;
    border: none;
    text-overflow:ellipsis;
   

    }
   

`

export const ContainerActionsModal=styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top: 35px;
    margin-bottom: 12px;
    width: 100%;
a{
  
    display: flex;
    text-decoration:none;
    background-color:#dcdde6;
    color: #191e59;
    margin-left:6px;
    margin-right:6px;
     padding: 7px;
     border-radius: 5px;
     transition:all ease .3s;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-overflow:hidden;
     &:hover{
        background-color:#33cc52;
         cursor: pointer;
     }
   img{
    height:22px;
    width: 22px;
   }
  
}
@media screen and (max-width:600px){
        justify-content:center;
        a{
            margin: 5px 0;
            margin: 0 5px;
        }
    }
`