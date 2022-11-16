import { ChangeEvent, useEffect, useState } from 'react'
import  * as S from './styled'
import { Link } from 'react-router-dom'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'







export const LoginPage=()=>{

    const [emailInput,setEmailInput]=useState('')
    const [passwordInput,setPasswordInput]=useState('')





    return <>
        <S.Login>
        <S.ContainerForm>
            <h3>Preencha com suas Informações</h3>
            <form action="">
                <div className='cx-form'>
                    <span><img src={emailIcon} alt="" /></span>
                    <input type="email"  
                       value={emailInput}  
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmailInput(e.target.value)}
                    />
                </div>

                <div className='cx-form'>
                    <span><img src={passwordIcon} alt="" /></span>
                    <input type="password" 
                       value={passwordInput}  
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>setPasswordInput(e.target.value)} 
                    />
                </div>

                <div className="cx-button">
                     <Link  to='/notes' onClick={()=>null} className='link'>Entrar</Link>
                </div>
                <div className="link-register">
                  <p>Nao tem registro ? <Link to='/register'>clique aqui</Link></p>
                </div>
            </form>


        </S.ContainerForm>
        </S.Login>
    
    </>



}