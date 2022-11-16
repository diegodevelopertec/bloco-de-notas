import * as S from './styled'
import { Link } from 'react-router-dom'
import { ChangeEvent,useState} from 'react'
import userIcon from '../../assets/images/user.svg'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'
import { Navigate } from 'react-router-dom'


export const Register=()=>{
    
    const [nameRegister,setNameRegister]=useState('')
    const [emailRegister,setEmailRegister]=useState('')
    const [passwordRegister,setPasswordRegister]=useState('')







    return <>
    <S.RegisterContainer>
        <S.FormRegister>
        <h3>Cadastro</h3>
            <div className="cx-form-register">
                <span><img src={userIcon} alt="" /></span>
                <input type="text" 
                    value={nameRegister} 
                    placeholder='Digite seu nome' 
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>setNameRegister(e.target.value)}/>
            </div>
            <div className="cx-form-register">
                <span><img src={emailIcon} alt="" /></span>
                <input type="email" 
                   value={emailRegister} 
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmailRegister(e.target.value)} 
                   placeholder='Digite seu email'/>
            </div>
            <div className="cx-form-register">
               <span><img src={passwordIcon} alt="" /></span>
                <input type="password" 
                   value={passwordRegister} 
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setPasswordRegister(e.target.value)} 
                   placeholder='Digite uma senha'/>
             </div>
             <div className="cx-register-btn">
                <a onClick={()=>null}>salvar</a>
             </div>




        </S.FormRegister>
    </S.RegisterContainer>
    

    </>


}