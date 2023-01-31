import * as S from './styled'
import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent,useEffect,useState} from 'react'
import userIcon from '../../assets/images/user.svg'
import emailIcon from '../../assets/images/email.svg'
import passwordIcon from '../../assets/images/password.svg'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import NoteImage from './../../assets/images/noteApp.png'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './../../helpers/yupMessage'
import { useAuth } from '../../hooks/useAuth'
import { toast } from 'react-toastify'

type Inputs={
    email: string,
    password: string,
  
}
export const Register=()=>{
    const {Register}=useAuth()
    const Redirect=useNavigate()



    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver:yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = async ( data )=> { 

        let dataRes=await Register(data.email,data.password)
       if(dataRes){
            Redirect('/login')
       }else{
        toast.error('algo deu errado')
       }
       
    }




    return <>
    <S.RegisterContainer>
        <S.FormRegister onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro</h3>
            
              
            <div className='error-msg-form' >
               <div className="cx-form-register">
                    <span><img src={emailIcon} alt="" /></span>
                        <input type="email" 
                            {...register('email')}
                            placeholder='Digite seu email'
                        />
               </div>
               <p>{errors.email?.message}</p>
            </div>
            <div className='error-msg-form' >
               <div className="cx-form-register">
                    <span><img src={passwordIcon} alt="" /></span>
                        <input type="password" 
                            {...register('password')}
                          placeholder='Digite uma senha'/>
               </div>
               <p>{errors.password?.message}</p>
            </div>
             <div className="cx-register-btn">
                <input type={'submit'}   value='inscrever-se'  />
             </div>




        </S.FormRegister>
        <S.ContainerImage>
            <img src={NoteImage} alt="" />
        </S.ContainerImage>
    </S.RegisterContainer>
    

    </>


}