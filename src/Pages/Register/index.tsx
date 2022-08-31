import * as S from './styled'
import { Link } from 'react-router-dom'
import { ChangeEvent,useState} from 'react'
import userIcon from '../../assets/images/user.svg'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'

export const Register=()=>{
    
    const [nameRegister,setNameRegister]=useState('')
    const [emailRegister,setEmailRegister]=useState('')
    const [passwordRegister,setPasswordRegister]=useState('')


const actionsFormRegister={
    getName:(e:ChangeEvent<HTMLInputElement>)=>setNameRegister(e.target.value),
    getEmail:(e:ChangeEvent<HTMLInputElement>)=>setEmailRegister(e.target.value),
    getPassword:(e:ChangeEvent<HTMLInputElement>)=>setPasswordRegister(e.target.value)

}
  
    return <>
    <S.RegisterContainer>
        <S.FormRegister>
        <h3>Cadastro</h3>
            <div className="cx-form-register">
                <span><img src={userIcon} alt="" /></span>
                <input type="text" value={nameRegister} placeholder='Digite seu nome' onChange={actionsFormRegister.getName}/>
            </div>
            <div className="cx-form-register">
                <span><img src={emailIcon} alt="" /></span>
                <input type="email" value={emailRegister} onChange={actionsFormRegister.getEmail} placeholder='Digite seu email'/>
            </div>
            <div className="cx-form-register">
               <span><img src={passwordIcon} alt="" /></span>
                <input type="password" value={passwordRegister} onChange={actionsFormRegister.getPassword} placeholder='Digite uma senha'/>
             </div>
             <div className="cx-register-btn">
                <Link to={'/'}>salvar</Link>
             </div>




        </S.FormRegister>
    </S.RegisterContainer>
    

    </>


}