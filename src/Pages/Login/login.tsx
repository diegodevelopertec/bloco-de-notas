import { ChangeEvent, useEffect, useState } from 'react'
import  * as S from './styled'
import { Link, useNavigate } from 'react-router-dom'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'
import { UserApi } from '../../Api/users'
import { useContext } from 'react'
import { ContextAuth } from '../../Contexts/Auth/AuthContext'
import NoteImage from './../../assets/images/noteApp.png'



export const LoginPage=()=>{

    const [emailInput,setEmailInput]=useState('')
    const [passwordInput,setPasswordInput]=useState('')
    const AuthApi=useContext(ContextAuth)


    const userLogin=async()=>{
        
    }


    return <>
        <S.Login>
        
        <S.ContainerForm>
            <h3>Login</h3>
            <form action="">
                <div className='cx-form'>
                    <span><img src={emailIcon} alt="" /></span>
                    <input type="email"  
                       value={emailInput}  
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmailInput(e.target.value)}
                       placeholder='Digite seu email'
                    />
                </div>

                <div className='cx-form'>
                    <span><img src={passwordIcon} alt="" /></span>
                    <input type="password" 
                       value={passwordInput}  
                       onChange={(e:ChangeEvent<HTMLInputElement>)=>setPasswordInput(e.target.value)} 
                       placeholder='Digite sua senha'
                    />
                </div>

                <div className="cx-button">
                     <Link  to='/notes' onClick={userLogin} className='link'>Entrar</Link>
                </div>
                <div className="link-register">
                  <p>Nao tem registro ? <Link to='/register'>clique aqui</Link></p>
                </div>
            </form>


        </S.ContainerForm>
        <S.ContainerImage>
            <img src={NoteImage} alt="" />
        </S.ContainerImage>
        </S.Login>
    
    </>



}