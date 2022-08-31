import { ChangeEvent, useEffect, useState } from 'react'
import  * as S from './styled'
import { Link } from 'react-router-dom'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'







export const LoginPage=()=>{




const [emailInput,setEmailInput]=useState('')
const [passwordInput,setPasswordInput]=useState('')




const formActions={

   
    funcEmailInput:(e:ChangeEvent<HTMLInputElement>)=>setEmailInput(e.target.value),
    funcPassInput:(e:ChangeEvent<HTMLInputElement>)=>setPasswordInput(e.target.value)
    

}


    return <>
        <S.Login>
        <S.ContainerForm>
            <h3>Preencha com suas Informações</h3>
            <form action="">
                <div className='cx-form'>
                    <span><img src={emailIcon} alt="" /></span>
                    <input type="email" name="" id="" value={emailInput}  onChange={formActions.funcEmailInput}/>
                </div>

                <div className='cx-form'>
                    <span><img src={passwordIcon} alt="" /></span>
                    <input type="password" name="" id="" value={passwordInput}  onChange={formActions.funcPassInput} />
                </div>

                <div className="cx-button">
                     <Link to='/notes'>Entrar</Link>
                </div>
                <div className="link-resgister">
                        <Link className='btn-link' to={'/register'}>cadastar</Link>
                </div>
            </form>


        </S.ContainerForm>
        </S.Login>
    
    </>



}