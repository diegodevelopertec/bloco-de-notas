import { ChangeEvent, useEffect, useState } from 'react'
import  * as S from './styled'
import { Link } from 'react-router-dom'
export const LoginPage=()=>{



const [nameInput,setNameInput]=useState('')
const [emailInput,setEmailInput]=useState('')
const [passwordInput,setPasswordInput]=useState('')

useEffect(()=>{
    console.log(nameInput);
    console.log(emailInput);
    console.log(passwordInput);
},[nameInput,emailInput,passwordInput])


const formActions={

    funcNameInput:(e:ChangeEvent<HTMLInputElement>)=>setNameInput(e.target.value),
    funcEmailInput:(e:ChangeEvent<HTMLInputElement>)=>setEmailInput(e.target.value),
    funcPassInput:(e:ChangeEvent<HTMLInputElement>)=>setPasswordInput(e.target.value)
    

}


    return <>
        <S.Login>
        <S.ContainerForm>
            <h3>Preencha com suas Informações</h3>
            <form action="">
                <div className='cx-form'>
                    <span>Nome</span>
                    <input type="text" value={nameInput} onChange={formActions.funcNameInput} />
                </div>

                <div className='cx-form'>
                    <span>Email</span>
                    <input type="email" name="" id="" value={emailInput}  onChange={formActions.funcEmailInput}/>
                </div>

                <div className='cx-form'>
                    <span>senha</span>
                    <input type="password" name="" id="" value={passwordInput}  onChange={formActions.funcPassInput} />
                </div>

                <div className="cx-button">
                     <Link to='/notes'>Enviar</Link>
                </div>
            </form>


        </S.ContainerForm>
        </S.Login>
    
    </>



}