import * as S from './styled'
import { Link } from 'react-router-dom'
import { ChangeEvent,useEffect,useState} from 'react'
import userIcon from '../../assets/images/user.svg'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'
import { UserApi } from '../../Api/users'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContextAuth } from '../../Contexts/Auth/AuthContext'
import NoteImage from './../../assets/images/noteApp.png'


export const Register=()=>{
    
    const [name,setNameRegister]=useState('')
    const [email,setEmailRegister]=useState('')
    const [password,setPasswordRegister]=useState('')
    

const registerUser=async()=>{
  if(name && email && password){
    let request=await UserApi.registro(name,email,password)
    let response=await request
    return response
  }else{
    alert('Preencha todos os campos')
  }
     
}



    return <>
    <S.RegisterContainer>
        <S.FormRegister>
        <h3>Cadastro</h3>
            <div className="cx-form-register">
                <span><img src={userIcon} alt="" /></span>
                <input type="text" 
                    value={name} 
                    placeholder='Digite seu nome' 
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>setNameRegister(e.target.value)}/>
            </div>
            <div className="cx-form-register">
                <span><img src={emailIcon} alt="" /></span>
                <input type="email" 
                   value={email} 
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmailRegister(e.target.value)} 
                   placeholder='Digite seu email'/>
            </div>
            <div className="cx-form-register">
               <span><img src={passwordIcon} alt="" /></span>
                <input type="password" 
                   value={password} 
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setPasswordRegister(e.target.value)} 
                   placeholder='Digite uma senha'/>
             </div>
             <div className="cx-register-btn">
                <a onClick={registerUser}>inscrever-se</a>
             </div>




        </S.FormRegister>
        <S.ContainerImage>
            <img src={NoteImage} alt="" />
        </S.ContainerImage>
    </S.RegisterContainer>
    

    </>


}