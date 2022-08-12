import styled from 'styled-components'


export const cardContainer=styled.div`
height:200px;
width:300px;
background-color:#03324a;
padding:10px;
display:flex;
flex-direction:column;
margin:5px;

`
export const cardData=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:10px;
padding:10px;
font-size:10px;
span{
    text-align:center
}
`

export const cardContent=styled.div`
flex:1;
margin-top:10px;
textarea{
 width:100%;
 height:100%;
 resize:none;
 padding:10px;

}

`